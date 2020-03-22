import * as Preact from 'preact';
const h = Preact.h;
import * as React from 'preact/compat';
import { useReducer } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import { reducer, initialState, Item, actions, ActionTypes } from '../store/reducer';
import { Nav } from './app/Nav';
import { Row } from './app/Row';

type Element = JSXInternal.Element;

const styles = {
  appContainer: {
    padding: '1rem',
  },
}

export function App(): Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reverse = () => dispatch(actions[ActionTypes.REVERSE]());

  return <Preact.Fragment>
    <Nav dispatch={dispatch} />
    <div
      onClick={reverse}
      className='app-container'
      style={styles.appContainer}
    >
      {state.items.map((item: Item, index: number) =>
        <Row {...item} />
      )}
    </div>
  </Preact.Fragment>
}
