import { html, Component } from './fc.js';

const HOME = new Component('fc-home', ({version}) => {
  return html`
    <style>
      h1, h2 {
        text-align: center;
      }
      img {
        width: 100%;
      }
    </style>
    <h1>Functional Web Components v${version}</h1>
    <h2>Custom Elements, Built with Functions & Lit-Html</h2>
    <p>The Power of Lit-Element with the Simplicity of Function-Based Components</p>
    <h3>Example: Simple Counter</h3>
    <simple-counter count="0"></simple-counter>
    <img src="https://raw.githubusercontent.com/jamesbmadden/fwc/master/img/counter-example-0.2.png">
  `;
});

const Counter = new Component('simple-counter', ({count}, instance) => {
  return html`
    <button @click=${() => {instance.count--}}>-</button><span>${count}</span><button @click=${() => {instance.count++}}>+</button>
  `;
});