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
    { id: Date.now(), value: '' },
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
  [ActionTypes.SET_VALUE]:
    (value: string): Action => {
      if (!value) throw new Error(`${ActionTypes.SET_VALUE}: payload string value is required`);
      return Object.freeze<Action>({
        type: ActionTypes.SET_VALUE,
        payload: value.trim(),
      });
    },
  [ActionTypes.ADD_ITEM]:
    (value: string): Action => {
      if (!value) throw new Error(`${ActionTypes.ADD_ITEM}: payload string value is required`);
      return Object.freeze<Action>({
        type: ActionTypes.ADD_ITEM,
        payload: {
          id: Date.now(),
          value,
        },
      });
    },
  [ActionTypes.REVERSE]:
    () => Object.freeze<Action>({
      type: ActionTypes.REVERSE,
    }),
};

const reducers = Object.freeze({
  [ActionTypes.DEFAULT]:
    (state: State, action: Action) =>
      ({ ...state }),
  [ActionTypes.SET_VALUE]:
    (state, action) =>
      ({
        ...state,
        currentItem: {
          ...state.currentItem,
          value: action.payload,
        },
      }),
  [ActionTypes.ADD_ITEM]:
    (state, action) =>
      ({
        ...state,
        items: [
          action.payload,
          ...state.items,
        ],
      }),
  [ActionTypes.REVERSE]:
    (state: State, action: Action) =>
      ({
        ...state,
        items: [
          ...state.items.reverse(),
        ],
      }),
});

export function reducer(state: State, action: Action): State {
  const reducer = reducers[action.type] || reducers[ActionTypes.DEFAULT];
  return reducer(state, action);
}
