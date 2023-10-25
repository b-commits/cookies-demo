import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Demo z Cookiesami</h1>
    <div class="card">
      <button id="button-fetch" type="button">Login</button>
    </div>
  </div>
`;

const login = () => {
  fetch('https://localhost:3000/', {
    method: 'GET',
    credentials: 'include',
  });
};

const buttonFetch = document.getElementById('button-fetch');

if (buttonFetch !== null) {
  buttonFetch.onclick = login;
}
