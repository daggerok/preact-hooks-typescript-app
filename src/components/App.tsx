import * as Preact from 'preact';
const h = Preact.h;
import * as React from 'preact/compat';
import { useReducer } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import { reducer, initialState, Item, actions, ActionTypes } from '../store/reducer';
import { Row } from './app/Row';
import { Nav } from './app/nav/Nav';

type Element = JSXInternal.Element;

const styles = {
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  appContainer: {
    padding: '1rem',
  },
}

export function App(): Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reverse = () => dispatch(actions[ActionTypes.REVERSE]());

  return <Preact.Fragment>
    <Nav dispatch={dispatch} />
    <div className='app-container' style={styles.appContainer}>
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
    </div>
  </Preact.Fragment>
}
