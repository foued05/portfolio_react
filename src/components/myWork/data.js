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
    subHeader: 'Build a Tic-tac-toe game.',
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
    subHeader: 'My graduation project',
    technologies: ['Angular', 'SpringBoot', 'SQL'],
    details:
      'My graduation project in ISAMM to develop a platform for "environmental management of trucks", the objective is after authentication employees of transport companies can locate their trucks in real time, control the speed, make a geographical fence for their trucks (Geofencing), manage company data, control and modify the access permissions of the accounts of their employees in this platform.',
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
