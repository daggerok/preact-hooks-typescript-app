import * as React from 'preact/compat';
import { JSXInternal } from 'preact/src/jsx';
import * as Preact from 'preact';
import { AddItem } from './AddItem';

const h = Preact.h;

const styles = {
  nav: {
    justifyContent: 'center',
    color: 'black',
    background: 'white',
    borderBottom: '1px solid black',
    // sticky position:
    display: 'flex',
    position: 'sticky',
    top: '0',
  },
  h1: {
    display: 'inline-block',
  },
};

export const Nav = ({ dispatch }): JSXInternal.Element =>
  <nav style={styles.nav}>
    <h1 style={styles.h1}>Items app</h1>
    <AddItem dispatch={dispatch}/>
  </nav>;
