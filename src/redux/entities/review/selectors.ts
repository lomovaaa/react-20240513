import { Store } from "../../../types";

export const selectReviewById = (state: Store, id: string) =>
  state.review.entities[id];
