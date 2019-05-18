import * as lit from 'lit-html';

window.FC_COMPONENTS = window.FC_COMPONENTS || [];
window.FC_VERSIONS = window.FC_VERSIONS || [];
FC_VERSIONS.push('0.2.1');

export const html = lit.html;

export class Component {

  /**
   * Returns list of components defined with FWC.
   */
  static get defined () {
    return FC_COMPONENTS;
  }

  new (properties) {
    let instance = document.createElement(this.name);
    Object.keys(properties).forEach(key => {
      instance[key] = properties[key];
    });
    return instance;
  }

  /**
   * Creates a Component.
   * @param {string} name - The tag of the component.
   * @param {function} render - The function used to render the component.
   * @param {object} config - The component's configuration
   */
  constructor (name, render, config = {properties: []}) {
    this.name = name;
    this.render = render;
    let props = config.properties;
    class Comp extends HTMLElement {
      constructor () {
        super();
        this._attr = {};
        props.forEach(prop => {
          this._attr[prop] = this.getAttribute(prop);
          Object.defineProperty(this, prop, {
            get: () => {
              return this._attr[prop]
            },
            set: value => {
              this.setAttribute(prop, value);
              return this._attr[prop] = value;
            }
          })
        });
        this.attachShadow({ mode: 'open' });
        this._runRender();
      }
      attributeChangedCallback (name, oldValue, value) {
        this._attr[name] = value;
        this._runRender();
      }
      static get observedAttributes() {
        return props;
      }
      _runRender() {
        lit.render(render(this._attr, this), this.shadowRoot);
      }
    };
    Comp.props = props;
    Comp.compName = this.name;
    customElements.define(name, Comp);
    FC_COMPONENTS.push(name);
  }

}