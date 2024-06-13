import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entitiyAdapter = createEntityAdapter();

export const UserSlice = createSlice({
  name: "user",
  initialState: entitiyAdapter.getInitialState(),
  reducers: {},
});
