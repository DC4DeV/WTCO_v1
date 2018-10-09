// Structure de données pour firebase ( sans tableau )

export default {
  vehicles: {
    0: { // id
      type: '',
      plate: '',
      kilometres: '',
      brand: '',
      model: '',
      picture: '',
      last_maintenance: '',
      controle_date: '',
      documents: {
        0: '', // id d'un document
        1: '',
      },
    },
  },

  documents: {
    0: { // id
      type: '',
      name: '',
      url: '',
    },
  },

  drivers: {
    0: { // id
      last_name: '',
      first_name: '',
      nickname: '',
      picture: '',
      birthdate: '',
      sexe: '',
      adress: '',
      licence: '',
      licence_validity: '',
      fcos: '',
      nss: '',
      mail: '',
      password: '',
      phone: '',
      nationality: '',
      compagny_id: '',
      languages: {
        0: '', // id de la langue
      },
      documents: {
        0: '', // id du document
        1: '',
      },
      vehicles: {
        0: '', // id d'un véhicule
      },
      missions: {
        0: '', // id de la mission
        1: '',
        2: '',
      },
      articles_fav: {
        0: '', // id de l'article
        1: '',
      },
      friends: {
        0: '', // id de l'ami
        1: '',
      },
    },
  },

  compagnies: {
    0: { // id de la compagnie
      name: '',
      owner: '',
      siret: '',
      adress: '',
      mail: '',
      contact: '',
      phone: '',
      picture: '',
    },
  },

  missions: {
    0: { // id de la mission
      loading_place: '',
      loading_adress: '',
      loading_date: '',
      real_loading_date: '',
      loading_hour: '',
      start_loading_hour: '',
      end_loading_hour: '',
      unloading_place: '',
      unloading_adress: '',
      unloading_date: '',
      real_unloading_date: '',
      unloading_hour: '',
      start_unloading_hour: '',
      end_unloading_hour: '',
      comment: '',
      driver_id: '',
    },
  },

  languages: {
    0: 'french',
    1: 'english',
  },

  articles: {
    0: { // id de l'article
      title: '',
      sumary: '',
      content: '',
      picture: '',
      map_id: '',
      author_id: '',
      comments: {
        0: {
          comment: '',
          author_id: '',
        },
      },
    },
  },

  map: {
    0: { // id de l'emplacement
      title: '',
      adress: '',
      coordonates: '',
      article_id: '',
    },
  },

  messages: {
    0: { // id du message
      title: '',
      is_pro: '',
      is_general: '',
      sender_id: '',
      dest: {
        0: '',
        1: '',
      },
    },
  },
};
