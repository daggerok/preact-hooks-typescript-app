import * as Preact from 'preact';
import * as React from 'preact/compat';
import { App } from './components/App';

const { h, render } = Preact;

render(
  <App/>,
  document.querySelector('#app')
);
