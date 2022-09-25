import { ROCKET } from './rocket';
import { STYLES } from './styles';

class SplashScreen extends HTMLElement {
  private _rocket = ROCKET;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._createStyle();
    this._createTemplate();
  }

  private _createEl(type: string) {
    return document.createElement(type);
  }

  private _createStyle() {
    const style = this._createEl('style');
    style.textContent = STYLES;
    this.shadowRoot?.appendChild(style);
  }

  private _createTemplate() {
    const containerDiv = this._createMainContainer();
    const imageDiv = this._createImageWrapper();

    imageDiv.appendChild(this._createRocket());
    containerDiv.appendChild(imageDiv);
    containerDiv.appendChild(this._createH2());

    this.shadowRoot?.appendChild(containerDiv);
  }

  private _createMainContainer(): HTMLElement {
    const containerDiv = this._createEl('div');
    containerDiv.classList.add('rocket-container');
    return containerDiv;
  }

  private _createImageWrapper(): HTMLElement {
    const imageDiv = this._createEl('div');
    imageDiv.classList.add('rocket-wrapper');
    return imageDiv;
  }

  private _createH2(): HTMLElement {
    const h2 = this._createEl('h2');
    h2.innerHTML = 'Loading <slot></slot>';
    return h2;
  }

  private _createRocket(): HTMLElement {
    const rocket = this._createEl('div');
    rocket.innerHTML = this._rocket;
    rocket.classList.add('rocket');
    return rocket;
  }
}

export const initComponent = () =>
  customElements.define('splash-screen', SplashScreen);
