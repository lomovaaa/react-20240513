import { RestaurantNormalized } from "../../../types";

export const selectRestaurantFromResult =
  (restaurantId: string) => (result: any) => ({
    ...result,
    data: result.data?.find(
      ({ id }: RestaurantNormalized) => id === restaurantId
    ),
  });
