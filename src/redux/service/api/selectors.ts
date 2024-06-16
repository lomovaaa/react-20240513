export const selectRestaurantFromResult =
  (restaurantId: string) => (result) => ({
    ...result,
    data: result.data?.find(({ id }) => id === restaurantId),
  });
