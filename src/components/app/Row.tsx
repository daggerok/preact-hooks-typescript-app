import * as React from 'preact/compat';
import { Item } from '../../store/reducer';
import { JSXInternal } from 'preact/src/jsx';
import * as Preact from 'preact';
const h = Preact.h;

const styles = {
  row: { /* ... */ },
  item: {
    fontWeight: 300,
  },
}

export const Row = (item: Item): JSXInternal.Element =>
  <div style={styles.row}>
    <h2 style={styles.item}>{item.value}</h2>
  </div>
