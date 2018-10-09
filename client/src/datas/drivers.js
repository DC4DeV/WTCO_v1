// Structure de données
export default [
  {
    id: '1',
    last_name: 'Smith',
    first_name: 'John',
    nickname: 'JohnyBritish',
    picture: '',
    birthdate: '12/02/1967',
    sexe: 'M',
    adress: '15 rue de la porte midi 52400 Jsaispasou',
    licence: '0002356887',
    licence_validity: '16/07/2021',
    medical_visits: [
      {
        date: '',
        place: '',
        documents: [],
      },
    ],
    fcos: '03/06/2020',
    formations: [
      {
        date: '',
        type: '',
        place: '',
        documents: [], // IDs de documents
      },
    ],
    nss: '16753254478845',
    mail: 'johny.smith@mon.mail',
    password: '',
    phone: '0345891232',
    nationality: 'Anglaise',
    compagny_id: 1,
    languages: [1, 2], // IDs de languages
    documents: [], // IDs de documents
    current_vehicles: [], // IDs de véhicules
    vehicles_history: [
      {
        date: '',
        vehicles: [], // IDs de véhicules
      },
    ],
    missions: [], // IDs de missions
    articles_fav: [], // IDs de articles
    friends: [], // IDs de drivers
  },
  {
    id: '2',
    last_name: 'Latoupille',
    first_name: 'Marie',
    nickname: 'Latoupille',
    picture: '',
    birthdate: '14/09/1983',
    sexe: 'F',
    adress: '45 bld du fleuve 45987 Labas',
    licence: '00045678978',
    licence_validity: '15/03/2019',
    medical_visits: [
      {
        date: '',
        place: '',
        documents: [],
      },
    ],
    fcos: '14/03/2023',
    formations: [
      {
        date: '',
        type: '',
        place: '',
        documents: [], // IDs de documents
      },
    ],
    nss: '2834578912345',
    mail: 'marie.latoupille@mon.mail',
    password: '',
    phone: '0156897845',
    nationality: 'Française',
    compagny_id: 1,
    languages: [1, 2], // IDs de languages
    documents: [], // IDs de documents
    current_vehicles: [], // IDs de véhicules
    vehicles_history: [
      {
        date: '',
        vehicles: [], // IDs de véhicules
      },
    ],
    missions: [], // IDs de missions
    articles_fav: [], // IDs de articles
    friends: [], // IDs de drivers
  },
];


// export default [
//   {
//     id: 1,
//     brand: 'Mercedes',
//     type: 'Actros',
//     plate: 'cd 458 rd',
//     kilometres: 389456,
//     model: '',
//     picture: '',
//     maintenances_history: [
//       {
//         date: '18/09/2017',
//         km: 300568,
//         type: 'Passage aux mines',
//         place: 'Centre de Controle technique',
//         comment: 'CT OK',
//         documents: [], // Ids de documents
//       },
//     ],
//     next_maintenances: [
//       {
//         date: '12/12/2018',
//         km: 400000,
//         place: 'Garage Mercedes',
//         type: 'revision périodique',
//       },
//     ],
//     controle_date: '18/09/2019',
//     documents: [], // Ids de documents
//   },
// ];

//   documents: [
//     {
//       id: '',
//       type: '',
//       name: '',
//       url: '',
//     },
//   ],

//   drivers: [
//     {
//       id: 1,
//       last_name: 'Smith',
//       first_name: 'John',
//       nickname: 'JohnyBritish',
//       picture: '',
//       birthdate: '12/02/1967',
//       sexe: 'M',
//       adress: '15 rue de la porte midi 52400 Jsaispasou',
//       licence: '0002356887',
//       licence_validity: '16/07/2021',
//       medical_visits: [
//         {
//           date: '',
//           place: '',
//           documents: [],
//         },
//       ],
//       fcos: '03/06/2020',
//       formations: [
//         {
//           date: '',
//           type: '',
//           place: '',
//           documents: [], // IDs de documents
//         },
//       ],
//       nss: '16753254478845',
//       mail: 'johny.smith@mon.mail',
//       password: '',
//       phone: '0345891232',
//       nationality: 'Anglaise',
//       compagny_id: 1,
//       languages: [1, 2], // IDs de languages
//       documents: [], // IDs de documents
//       current_vehicles: [], // IDs de véhicules
//       vehicles_history: [
//         {
//           date: '',
//           vehicles: [], // IDs de véhicules
//         },
//       ],
//       missions: [], // IDs de missions
//       articles_fav: [], // IDs de articles
//       friends: [], // IDs de drivers
//     },
//   ],



//   languages: [
//     {
//       id: 1,
//       language: 'français',
//     },
//     {
//       id: 2,
//       language: 'english',
//     },
//     {
//       id: 3,
//       language: 'deutsch',
//     },
//   ],

//   articles: [
//     {
//       id: '',
//       title: '',
//       summary: '',
//       content: '',
//       picture: '',
//       map_id: '',
//       author_id: '',
//       comments: [
//         {
//           comment: '',
//           author_id: '',
//           date: '',
//         },
//       ],
//     },
//   ],

//   map: [
//     {
//       id: '',
//       title: '',
//       adress: '',
//       coordonates: '',
//       article_id: '',
//     },
//   ],

//   messages: [
//     {
//       id: '',
//       title: '',
//       is_pro: '',
//       is_general: '',
//       sender_id: '', // id de drivers ou compagny si is_pro = true
//       dest: [], // IDs de drivers ou compagny si is_pro = true

//     },
//   ],
// };
