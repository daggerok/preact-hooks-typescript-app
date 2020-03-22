import * as Preact from 'preact';
const h = Preact.h;
import * as React from 'preact/compat';
import { useReducer } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import { reducer, initialState, Item, actions, ActionTypes } from '../store/reducer';
import { Row } from './app/Row';
import { AddItem } from './app/AddItem';

type Element = JSXInternal.Element;

const styles = {
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  },
}

export function App(): Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reverse = () => dispatch(actions[ActionTypes.REVERSE]());

  return <Preact.Fragment>
    <AddItem dispatch={dispatch} />
    <ul
      onClick={reverse}
      style={styles.ul}
    >
      {state.items.map((item: Item, index: number) =>
        <li key={index}>
          <Row {...item} />
        </li>
      )}
    </ul>
  </Preact.Fragment>
}
