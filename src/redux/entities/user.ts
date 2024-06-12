import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../materials/normalized-mock";
import { UserNormalized } from "../../types";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce<Record<string, UserNormalized>>(
      (acc, user) => {
        acc[user.id] = user;

        return acc;
      },
      {}
    ),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
