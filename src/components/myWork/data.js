//Kasper Template Samples Images
import UserManagement from '../../assets/images/What-is-gRPC_.jpg'

//Rest Countries Api Images
import TicTacToe from '../../assets/images/ticTacToe.png'

//Space Tourism Images
import CommunicationPlatform from '../../assets/images/logo-png-1.png'

//Interactive Comments Images
import Geotracker from '../../assets/images/25.png'
import Geotracker1 from '../../assets/images/addmission.PNG'
import Geotracker2 from '../../assets/images/dashboard.PNG'
import Geotracker3 from '../../assets/images/23.PNG'
import Geotracker4 from '../../assets/images/login.PNG'
import Geotracker5 from '../../assets/images/truckstopped.PNG'

import PC1 from '../../assets/images/19.PNG'
import PC2 from '../../assets/images/rzrzr (1).PNG'
import PC3 from '../../assets/images/6 (1).PNG'
import PC4 from '../../assets/images/5 (2).PNG'
import PC5 from '../../assets/images/11.PNG'
import PC6 from '../../assets/images/10.PNG'
import PC7 from '../../assets/images/18.PNG'
import PC8 from '../../assets/images/20.PNG'

import cc from '../../assets/images/ccc.PNG'
const projects = [
  {
    id:'p2' ,
    name: 'gRPC',
    header: 'gRPC',
    subHeader: 'gRPC .NET Core',
    technologies: ['.NET Core', 'gRPC'],
    details:
      'Création des services gRPC avec .NET Core pour streaming les données',
    homePage: UserManagement,
    sourceCode: 'https://github.com/foued05/GrpcService.git',
    images: [
      UserManagement,
    ],
  },
  {
    id:'p3' ,
    name: 'XUnit & Specflow',
    header: 'XUnit & Specflow',
    subHeader: '',
    technologies: ['.NET Core', 'Specflow'],
    details:
      'Création des tests unitiaire avec XUnit .NET et Specflow for BDD',
    homePage: CommunicationPlatform,
    sourceCode: 'https://github.com/foued05/XUnit_Specflow_dotnet.git',
    images: [
      CommunicationPlatform
    ],
  },
  {
    id:'p6' ,
    name: 'Porfolio',
    header: 'Portfolio',
    subHeader: '',
    technologies: ['React', 'Vercel'],
    details:
      'Créé un Portfolio et le déployé via Vercel',
    homePage: CommunicationPlatform,
    sourceCode: 'https://github.com/foued05/portfolio_react.git',
    images: [
      cc
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
    id:'p5' ,
    name: 'Storage Pricing Calculator',
    header: 'Storage Pricing Calculator',
    subHeader: 'développer une plateforme pour calculer les prix dans le stockage dans un Cloud native',
    technologies: ['Angular','TypeScript', 'NodeJS', 'ExpressJS', 'Golang', 'FastApi', 'MongoDb', 'PostegreSQL', 'Kubernetes'],
    details:
      '',
    homePage: TicTacToe,
    sourceCode: 'https://github.com/foued05/Storage_Pricing_Calculator.git',
    images: [
      PC1,
      PC2,
      PC3,
      PC4,
      PC5,
      PC6,
      PC7,
      PC8,
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
