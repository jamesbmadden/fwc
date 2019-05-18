import { html } from 'lit-html';
import { Component } from './fc.js';

const HOME = new Component('fc-home', ({version}) => {
  return html`
    <style>
      h1, h2 {
        text-align: center;
      }
    </style>
    <h1>Functional Components v${version}</h1>
    <h2>Custom Elements, Built with Functions & Lit-Html</h2>
    <p>The Power of Lit-Element with the Simplicity of Function-Based Components</p>
  `;
});