import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<body>
  <a class="header-link">Work</a>
  <a class="header-link">Interests</a>
  <a class="header-link">Contact</a>
  </body>
`

setupCounter(document.querySelector('#counter'))
