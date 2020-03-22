export interface Item {
  id: number;
  value: string;
}

interface State {
  currentItem: Item;
  items: Item[];
}

export const initialState: State = {
  currentItem: null,
  items: [
    { id: Date.now(), value: 'ololo' },
    { id: Date.now(), value: 'trololo' },
  ],
};

interface Action {
  type: number;
  payload?: any;
}

export enum ActionTypes {
  SET_VALUE,
  ADD_ITEM,
  REVERSE,
  DEFAULT,
}

export const actions = {
  [ActionTypes.SET_VALUE]: function setValue(value: string): Action {
    if (!value) throw new Error(`${ActionTypes.SET_VALUE}: payload string value is required`);
    return Object.freeze<Action>({
      type: ActionTypes.SET_VALUE,
      payload: value.trim(),
    });
  },
  [ActionTypes.ADD_ITEM]: function addItem(value: string): Action {
    if (!value) throw new Error(`${ActionTypes.ADD_ITEM}: payload string value is required`);
    return Object.freeze<Action>({
      type: ActionTypes.ADD_ITEM,
      payload: {
        id: Date.now(),
        value,
      },
    });
  },
  [ActionTypes.REVERSE]: () => Object.freeze<Action>({
    type: ActionTypes.REVERSE,
  }),
};

const reducers = Object.freeze({
  [ActionTypes.DEFAULT]: (state: State, action: Action) => Object.freeze({ ...state }),
  [ActionTypes.SET_VALUE]: (state, action) => Object.freeze({
    ...state, currentItem: {
      ...state.currentItem,
      value: action.payload,
    },
  }),
  [ActionTypes.ADD_ITEM]: (state, action) => Object.freeze({
    ...state, items: [
      ...state.items,
      action.payload,
    ],
  }),
  [ActionTypes.REVERSE]: (state: State, action: Action) => Object.freeze({
    ...state, items: [
      ...state.items.reverse(),
    ],
  }),
});

export function reducer(state: State, action: Action): State {
  const reducer = reducers[action.type] || reducers[ActionTypes.DEFAULT];
  return reducer(state, action);
}
