//Kasper Template Samples Images
import UserManagement from '../../assets/images/react1.png'

//Rest Countries Api Images
import TicTacToe from '../../assets/images/ticTacToe.png'

//Space Tourism Images
import CommunicationPlatform from '../../assets/images/tt1.png'

//Interactive Comments Images
import Geotracker from '../../assets/images/25.png'
import Geotracker1 from '../../assets/images/addmission.PNG'
import Geotracker2 from '../../assets/images/dashboard.PNG'
import Geotracker3 from '../../assets/images/deletecompany.PNG'
import Geotracker4 from '../../assets/images/login.PNG'
import Geotracker5 from '../../assets/images/truckstopped.PNG'
const projects = [
  {
    id:'p2' ,
    name: 'User Management',
    header: 'User Management',
    subHeader: 'Create an application that allows to list users and add a new one, using Fake REST API JSONPlaceholder.',
    technologies: ['Html', 'Css', 'React'],
    details:
      'My first project with react',
    homePage: UserManagement,
    live: 'https://firstreactappfoued.netlify.app/',
    sourceCode: 'https://github.com/foued05/first_react_app.git',
    images: [
      UserManagement,
    ],
  },
  {
    id:'p3' ,
    name: 'Communication Platform',
    header: 'Communication Platform',
    subHeader: '',
    technologies: ['NodeJS', 'MongoDB'],
    details:
      'Creation APIs',
    homePage: CommunicationPlatform,
    sourceCode: 'https://github.com/foued05/first_project_node.git',
    images: [
      CommunicationPlatform
    ],
  },
  {
    id:'p1' ,
    name: 'Tic Tac Toe',
    header: 'Tic Tac Toe',
    subHeader: 'Développement d\'un jeu Tic-tac-toe.',
    technologies: ['Html', 'Css','TypeScript'],
    details:
      '',
    homePage: TicTacToe,
    live: 'https://tictactoefoued.netlify.app/',
    sourceCode: 'https://github.com/foued05/tic-tac-toe.git',
    images: [
      TicTacToe
    ],
  },
  
  
  {
    id:'p4' ,
    name: 'GEOTRACKER',
    header: 'GEOTRACKER',
    subHeader: 'mon Projet Fin d\'Etude',
    technologies: ['Angular', 'SpringBoot', 'SQL'],
    details:
      'Mon projet de fin d\'études à l\'ISAMM: développer une plateforme de "gestion environnementale des camions", l\'objectif est qu\'après authentification les salariés des entreprises de transport puissent localiser leurs camions en temps réel, contrôler la vitesse, faire une clôture géographique pour leurs camions (Geofencing), gérer données de l\'entreprise, contrôler et modifier les autorisations d\'accès aux comptes de leurs employés dans cette plateforme.',
    homePage: Geotracker,
    images: [
      Geotracker,
      Geotracker1,
      Geotracker2,
      Geotracker3,
      Geotracker4,
      Geotracker5
    ],
  },
]

export default projects
