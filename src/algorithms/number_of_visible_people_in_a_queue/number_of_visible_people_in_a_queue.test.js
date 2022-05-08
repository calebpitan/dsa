import { canSeePersonsCount } from "./number_of_visible_people_in_a_queue.js";

describe("number_of_visible_people_in_a_queue", () => {
  let heights1 = [10, 6, 8, 5, 11, 9];
  let expected1 = [3, 1, 2, 1, 1, 0];
  let heights2 = [5, 1, 2, 3, 10];
  let expected2 = [4, 1, 1, 1, 0];

  it("#canSeePersonsCount - should count the number of other persons each person can see behind them in a queue", () => {
    expect(canSeePersonsCount(heights1)).toMatchObject(expected1);
    expect(canSeePersonsCount(heights2)).toMatchObject(expected2);
  });
});
