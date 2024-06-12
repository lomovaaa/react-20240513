import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartState = Record<string, number>;

const addReducer: CaseReducer<CartState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state[payload] = (state[payload] || 0) + 1;
};

const removeReducer: CaseReducer<CartState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  if (state[payload] === undefined) {
    return;
  }

  state[payload] = state[payload] - 1;
  if (state[payload] <= 0) {
    delete state[payload];
  }
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    add: addReducer,
    remove: removeReducer,
    clear: () => {
      return {};
    },
  },
});

export const { add, remove, clear } = CartSlice.actions;
