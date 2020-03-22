import * as React from 'preact/compat';
import { Item } from '../../store/reducer';
import { JSXInternal } from 'preact/src/jsx';
import * as Preact from 'preact';
const h = Preact.h;

const styles = {
  h2: {
    fontWeight: 300,
    textAlign: 'center',
    margin: 0,
  },
}

export const Row = (item: Item): JSXInternal.Element =>
  <h2 style={styles.h2}>{item.value}</h2>
