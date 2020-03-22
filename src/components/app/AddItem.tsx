import * as React from 'preact/compat';
import { JSXInternal } from 'preact/src/jsx';
import * as Preact from 'preact';
import { useState } from 'preact/hooks';
import { actions, ActionTypes } from '../../store/reducer';
const h = Preact.h;

const styles = { /* ... */ };

interface KeyboardEvent {
  target: HTMLInputElement,
  key: string,
}

export function AddItem({ dispatch }): JSXInternal.Element {
  const [current, setCurrent] = useState('');
  const addItem = (value: string) => dispatch(actions[ActionTypes.ADD_ITEM](value));
  const onKeyPress = (e: KeyboardEvent | any /* fuck it... */) => {
    const value = e.target.value;
    setCurrent(value);
    if ('Enter' !== e.key) return;
    addItem(value);
    setCurrent('');
  };

  return (
    <Preact.Fragment>
      <label>add new item: </label>
      <input
        type='text'
        value={current}
        onKeyPress={onKeyPress}
      />
    </Preact.Fragment>
  );
}
