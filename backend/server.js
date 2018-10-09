import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import passwordGenerator from 'password-generator';
import nodemailer from 'nodemailer';
import Comment from './models/comment';
import Compagny from './models/Compagny';
import Driver from './models/Driver';
import Mission from './models/Mission';
import { getSecret } from './secret';
import Article from './models/Article';

// and create our instances
const app = express();
const router = express.Router();
// const cors = require('cors');

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// nodemail
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
    auth: {
      user: 'wtco.contact@gmail.com',
      pass: getSecret('smtpPass'),
    },
});

//app.use(cors());

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/comments', (req, res) => {
  Comment.find((err, comments) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: comments });
  });
});

router.post('/comments', (req, res) => {
  const comment = new Comment();
  // body parser lets us use the req.body
  const { author, text } = req.body;
  console.log(req);
  if (!author || !text) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and comment'
    });
  }
  comment.author = author;
  comment.text = text;
  comment.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.put('/comments/:commentId', (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    return res.json({ success: false, error: 'No comment id provided' });
  }
  Comment.findById(commentId, (error, comment) => {
    if (error) return res.json({ success: false, error });
    const { author, text } = req.body;
    if (author) comment.author = author;
    if (text) comment.text = text;
    comment.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });
});

router.delete('/comments/:commentId', (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    return res.json({ success: false, error: 'No comment id provided' });
  }
  Comment.remove({ _id: commentId }, (error, comment) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});

// Connexion

router.get('/register/check', (req, res) => {

  const { user, password } = req.query;
  Compagny.findOne({ mail: user, password: password}, { password: 0 } ,(err, compagny) => {
    if (err) return res.json({ success: false, error: err });

    if (!compagny) return res.json({ success: false })
    return res.json({ success: true, data: compagny });
  });
});

router.get('/register/check2', (req, res) => {

  const { user, password } = req.query;
  Driver.findOne({ mail: user, password: password}, { password: 0 }, (err, driver) => {
    if (err) return res.json({ success: false, error: err });

    if (!driver) return res.json({ success: false, error: 'Adresse mail / Mot de passe inconnu' })
    return res.json({ success: true, data: driver });
  });
});

// CRUD model Compagny

// Ajout
router.post('/register/addCompagny', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'POST');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Nouvelle instance de Compagny
  const compagny = new Compagny();
  // Destructuration de la nouvelle compagny
  // body parser lets us use the req.body
  const {
    id,
    role,
    name,
    owner,
    mail,
    phone,
    siret,
    adress,
    password,
  } = req.body
  console.log(req.body);

  // Vérifie que les champs obligatoires soient bien présents
  if (!name || !mail || !password) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'Les champs obligatoires ne sont pas renseignés',
      data: { compagny },

    });
  }
  // Assignation des champs de la bdd
  compagny.id = id,
  compagny.role = role;
  compagny.name = name,
  compagny.owner = owner,
  compagny.mail = mail,
  compagny.phone = phone,
  compagny.siret = siret,
  compagny.adress = adress,
  compagny.password = password,
    
    // Sauvegarde en bdd
    compagny.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: compagny });
    });

  // Envoie un mail avec le mot de passe
  const message = {
    from: 'wco-contact@gmail.com',
    to: mail,
    subject: 'Inscription WTCO',
    text: `Votre mot de passe: ${password}`
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  })
});

// CRUD model Article

router.post('/social/articles/add',(req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'POST');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  const article = new Article();
  const {
    id, 
    title,
    author,
    date,
    content,
    comments,
  }= req.body
  console.log(`ceci est le console log req.body`);
  console.log(req.body);

  if (!title ) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'Entrer au moins le titre',
      data:{ article },      
    });
  }

  article.id = id;
  article.title = title;
  article.author = author;
  article.date = date;
  article.content = content;
  article.comments = comments;

  article.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: article });
  });
})

router.get('/social/articles', (req, res) => {
  Article.find((err, articles) => {
    console.log('recherche')
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: articles });
  });
});
router.get('/article', (req, res) => {
  Article.find((err, articles) => {
    console.log('recherche')
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: articles });
  });
});
// CRUD model Mission

// Récupération des missions
router.get('/compagny/missions', (req, res) => {
  Mission.find((err, missions) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: missions });
  });
});

// Ajout d'une mission
router.post('/compagny/missions/add', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'POST');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // console.log(`ceci est le console log req headers`);
  // console.log(req.headers);
  // console.log(req.body);

  // Nouvelle instance de Mission
  const mission = new Mission();
  // Destructuration de la nouvelle mission
  // body parser lets us use the req.body
  const {
    id,
    compagny_id,
    loadingPlace,
    loadingAdress,
    loadingPostCode,
    loadingCity,
    loadingDate,
    loadingHour,
    unloadingPlace,
    unloadingAdress,
    unloadingPostCode,
    unloadingCity,
    unloadingDate,
    unloadingHour,
    comments,
    driver1,
    driver2,
    vehicle,
    trailor,
  } = req.body
  console.log(req.body);

  // Il faut qu'il y ai au moins le nom de famille de renseigné
  if (!loadingPlace) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'Entrer au moins le nom de l\'entreprise de chargement',
      data: { mission },

    });
  }
  // Assignation des champs de la bdd
  mission.id = id,
  mission.compagny_id = compagny_id;
  mission.loading_place = loadingPlace,
  mission.loading_adress = loadingAdress,
  mission.loading_postcode = loadingPostCode,
  mission.loading_city = loadingCity,
  mission.loading_date = loadingDate,
  mission.loading_hour = loadingHour,
  mission.unloading_place = unloadingPlace,
  mission.unloading_adress = unloadingAdress,
  mission.unloading_postcode = unloadingPostCode,
  mission.unloading_city = unloadingCity,
  mission.unloading_date = unloadingDate,
  mission.unloading_hour = unloadingHour,
  mission.mission_comment = comments,
  mission.drivers = [driver1, driver2],
  mission.vehicle_id = vehicle,
  mission.trailor_id = trailor,
  // Sauvegarde en bdd
    mission.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: mission });
  });
});

// Edition d'une mission
router.put('/missions/:id/edit', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'PUT');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  console.log(req.body);
  // Destructuration de req.body pour récupérer _id afin de cibler la mission à modifier dans la bdd
  const { _id } = req.body;
  if (!_id) {
    return res.json({ success: false, error: 'pas d\'_id pour ctte mission' });
  }
  // Recherche dde la mission modifiée dans la bdd
  Mission.findById(_id, (error, mission) => {
    if (error) return res.json({ success: false, error });
    const {
      loading_place,
      loading_adress,
      loading_postcode,
      loading_city,
      loading_date,
      real_loading_date,
      loading_hour,
      arrival_loading_hour,
      departure_loading_hour,
      km_loading,
      unloading_place,
      unloading_adress,
      unloading_postcode,
      unloading_city,
      unloading_date,
      real_unloading_date,
      unloading_hour,
      arrival_unloading_hour,
      departure_unloading_hour,
      km_unloading,
      mission_comment,
      comment_load,
      comment_unload,
      drivers,
      vehicle_id,
      trailor_id,
      loaded,
      unloaded,
    } = req.body

    // Assignation des champs modifiés
    if (loading_place) mission.loading_place = loading_place;
    if (loading_adress) mission.loading_adress = loading_adress;
    if (loading_postcode) mission.loading_postcode = loading_postcode;
    if (loading_city) mission.loading_city = loading_city;
    if (loading_date) mission.loading_date = loading_date;
    if (real_loading_date) mission.real_loading_date = real_loading_date;
    if (loading_hour) mission.loading_hour = loading_hour;
    if (arrival_loading_hour) mission.arrival_loading_hour = arrival_loading_hour;
    if (departure_loading_hour) mission.departure_loading_hour = departure_loading_hour;
    if (km_loading) mission.km_loading = km_loading;
    if (unloading_place) mission.unloading_place = unloading_place;
    if (unloading_adress) mission.unloading_adress = unloading_adress;
    if (unloading_postcode) mission.unloading_postcode = unloading_postcode;
    if (unloading_city) mission.unloading_city = unloading_city;
    if (unloading_date) mission.unloading_date = unloading_date;
    if (real_unloading_date) mission.real_unloading_date = real_unloading_date;
    if (unloading_hour) mission.unloading_hour = unloading_hour;
    if (arrival_unloading_hour) mission.arrival_unloading_hour = arrival_unloading_hour;
    if (departure_unloading_hour) mission.departure_unloading_hour = departure_unloading_hour;
    if (km_unloading) mission.km_unloading = km_unloading;
    if (mission_comment) mission.mission_comment = mission_comment;
    if (comment_load) mission.comment_load = comment_load;
    if (comment_unload) mission.comment_unload = comment_unload;
    if (drivers) mission.drivers = drivers;
    if (vehicle_id) mission.vehicle_id = vehicle_id;
    if (trailor_id) mission.trailor_id = trailor_id;
    if (loaded) mission.loaded = loaded;
    if (unloaded) mission.unloaded = unloaded;
    
    // Sauvegarde
    mission.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });
});

router.delete('/compagny/missions/remove', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  console.log(req);
  // Envoyé dans params avec axios, récupéré dans req.query avec express
  const { _id } = req.query;
  if (!_id) {
    return res.json({ success: false, error: 'Pas d\'id pour cette mission' });
  }
  Mission.remove({ _id: _id }, (error, mission) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});

// Récupérations des missions d'un chauffeur

router.get('/social/missions', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'GET');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  const { userId } = req.query;
  if (!userId) {
    return res.json({ success: false, error: 'UserId manquant' });
  }
  Mission.find((err, missions) => {
    if (err) return res.json({ success: false, error: err });

    const selectedMissions = missions.filter(mission => mission.drivers[0] === userId || mission.drivers[1] === userId)
    console.log(selectedMissions);
    return res.json({ success:true, missions: selectedMissions });
  });
});

// CRUD for model Driver 

// Récupération de la liste des chauffeurs
router.get('/compagny/drivers', (req, res) => {
  Driver.find({}, {password: 0}, (err, drivers) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: drivers });
  });
});

// Ajout d'un chauffeur
router.post('/compagny/drivers/add', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'POST');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  
  // console.log(`ceci est le console log req headers`);
  // console.log(req.headers);
  // console.log(req.body);

  // Nouvelle instance de Driver
  const driver = new Driver();
  // Destructuration du nouveau chauffeur
  // body parser lets us use the req.body
  const { id,
          role,
          last_name,
          first_name,
          nickname,
          picture,
          birthdate,
          sexe,
          adress,
          licence,
          licence_validity,
          medical_visits,
          fcos,
          formations,
          nss,
          mail,
          phone,
          nationality,
          compagny_id,
          languages,
          current_vehicles,
          vehicles_history,
          missions,
          articles_fav,
          friends,       
        } = req.body
  console.log(`ceci est le console log req.body`);
  console.log(req.body);

  // Generation d'un mot de passe
  const password = passwordGenerator(10, false)
  
  // Il faut qu'il y ai au moins le nom de famille de renseigné
  if (!last_name) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'Entrer au moins le nom de famille et une adresse mail',
      data:{ driver },
      
    });
  }
  // Assignation des champs de la bdd
  driver.id = id;
  driver.role = role;
  driver.last_name = last_name;
  driver.first_name = first_name;
  driver.nickname = nickname;
  driver.picture = picture;
  driver.birthdate = birthdate;
  driver.sexe = sexe;
  driver.adress = adress;
  driver.licence = licence;
  driver.licence_validity = licence_validity;
  driver.medical_visits = medical_visits;
  driver.fcos = fcos;
  driver.formations = formations;
  driver.nss = nss;
  driver.mail = mail;
  driver.password = password;
  driver.phone = phone;
  driver.nationality = nationality;
  driver.compagny_id = compagny_id;
  driver.languages = languages;
  driver.current_vehicles = current_vehicles;
  driver.vehicles_history = vehicles_history;
  driver.missions = missions;
  driver.articles_fav = articles_fav;
  driver.friends = friends;
  // Sauvegarde en bdd
  driver.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: driver });
  });

  // Envoie un mail avec le mot de passe
  const message = {
    from: 'wco-contact@gmail.com',
    to: mail,
    subject: 'Inscription WTCO',
    text: `Votre mot de passe: ${password}`
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  })
});

// Modification d'un chauffeur
router.put('/compagny/drivers/:id/edit', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'PUT');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  console.log(req.body);
  // Destructuration de req.body pour récupérer _id afin de cibler le chauffeur à modifier dans la bdd
  const { _id } = req.body;
  if (!_id) {
    return res.json({ success: false, error: 'pas d\'_id pour ce chauffeur' });
  }
  // Recherche du choffeur modifié dans la bdd
  Driver.findById(_id, (error, driver) => {
    if (error) return res.json({ success: false, error });
    const {   
      last_name,
      first_name,
      nickname,
      picture,
      birthdate,
      sexe,
      adress,
      licence,
      licence_validity,
      medical_visits,
      fcos,
      formations,
      nss,
      mail,
      password,
      phone,
      nationality,
      compagny_id,
      languages,
      current_vehicles,
      vehicles_history,
      missions,
      articles_fav,
      friends
    } = req.body
    
    // Assignation des champs modifiés
    if (last_name)driver.last_name = last_name;
    if (first_name)driver.first_name = first_name;
    if (nickname)driver.nickname = nickname;
    if (picture)driver.picture = picture;
    if (birthdate)driver.birthdate = birthdate;
    if (sexe)driver.sexe = sexe;
    if (adress)driver.adress = adress;
    if (licence)driver.licence = licence;
    if (licence_validity)driver.licence_validity = licence_validity;
    if (medical_visits)driver.medical_visits = medical_visits;
    if (fcos)driver.fcos = fcos;
    if (formations)driver.formations = formations;
    if (nss)driver.nss = nss;
    if (mail)driver.mail = mail;
    if (password)driver.password = password;
    if (phone)driver.phone = phone;
    if (nationality)driver.nationality = nationality;
    if (compagny_id)driver.compagny_id = compagny_id;
    if (languages)driver.languages = languages;
    if (current_vehicles)driver.current_vehicles = current_vehicles;
    if (vehicles_history)driver.vehicles_history = vehicles_history;
    if (missions)driver.missions = missions;
    if (articles_fav)driver.articles_fav = articles_fav;
    if (friends)driver.friends = friends;
    // Sauvegarde
    driver.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });
});

// suppression d'un chauffeur d'une entreprise
router.put('/compagny/drivers/:id/remove', (req, res) => {
  // res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  // res.setHeader('Access-Control-Allow-Methods', 'PUT');
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Destructuration de req.body pour récupérer _id afin de cibler le chauffeur à modifier dans la bdd
  const { _id } = req.body;
  if (!_id) {
    return res.json({ success: false, error: 'pas d\'_id pour ce chauffeur' });
  }
  Driver.findById(_id, (error, driver) => {
    if (error) return res.json({ success: false, error });
    
    // Passe le champs compagny_id du chauffeur à 0
    driver.compagny_id = '0';

    // Sauvegarde
    driver.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });
});

// Récupération des chauffeur d'une entreprise avec son Id
router.get('/drivers', (req, res) => {
  const {compagnyId} = req.query;
  Driver.find((err, drivers) => {
    if (err) return res.json({ success: false, error: err });

    const selectedDrivers = drivers.filter(driver => driver.compagny_id === compagnyId)
    return res.json({ success: true, drivers: selectedDrivers });
  });
});

// router.delete('/compagny/drivers/:id/remove', (req, res) => {
//   const { _id } = req.body;
//   if (!_id) {
//     return res.json({ success: false, error: 'No comment id provided' });
//   }
//   Driver.remove({ _id: _id }, (error, driver) => {
//     if (error) return res.json({ success: false, error });
//     return res.json({ success: true });
//   });
// });


// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
