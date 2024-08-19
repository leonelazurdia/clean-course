import './style.css'
//import './clean-smells/02-low-coupling.ts';
import './code-smells/02-low-coupling';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`

