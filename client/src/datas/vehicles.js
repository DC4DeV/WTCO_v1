export default [
  {
    id: '1',
    brand: 'Mercedes',
    type: 'Tracteur',
    model: 'Actros',
    plate: 'cd 458 rd',
    kilometres: 389456,
    picture: '',
    maintenances_history: [
      {
        date: '18/09/2017',
        km: 300568,
        type: 'Passage aux mines',
        place: 'Centre de Controle technique',
        comment: 'CT OK',
        documents: [], // Ids de documents
      },
    ],
    next_maintenances: [
      {
        date: '12/12/2018',
        km: 400000,
        place: 'Garage Mercedes',
        type: 'revision périodique',
      },
    ],
    controle_date: '18/09/2019',
    documents: [], // Ids de documents
  },
  {
    id: '2',
    brand: 'Krone',
    model: 'plateau',
    type: 'Sem',
    plate: 'as 785 fg',
    kilometres: 216000,
    picture: '',
    maintenances_history: [
      {
        date: '10/08/2018',
        km: 190000,
        type: 'Refection freins',
        place: 'Atelier',
        comment: '',
        documents: [], // Ids de documents
      },
    ],
    next_maintenances: [{}],
    controle_date: '12/11/2018',
    documents: [],
  },
];
