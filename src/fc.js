import * as lit from 'lit-html';

window.FC_COMPONENTS = window.FC_COMPONENTS || [];
window.FC_VERSIONS = window.FC_VERSIONS || [];
FC_VERSIONS.push('0.2.1');

export const html = lit.html;

export class Component {

  static get defined () {
    return FC_COMPONENTS;
  }

  constructor (name, _render) {
    this.name = name;
    this.render = _render;
    let props = this.getProperties();
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
        lit.render(_render(this._attr, this), this.shadowRoot);
      }
    };
    Comp.props = props;
    Comp.compName = this.name;
    customElements.define(name, Comp);
    FC_COMPONENTS.push(name);
  }

  getProperties () {
    let renderString = this.render.toString();
    let propertiesString = renderString.split('{')[1].split('}')[0];
    const props = propertiesString.split(',').map(value => {
      return value.trim();
    });
    return props;
  }

}