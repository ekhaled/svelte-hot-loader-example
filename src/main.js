import './css/app.css';
import store from './helpers/store.js';
import App from './components/App.html';

var app = new App({
  target: document.body,
  store
});

export default app;