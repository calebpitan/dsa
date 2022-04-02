import { findSignatureCounts } from "./passing_yearbooks.js";

describe("passing_yearbooks", () => {
  const arr = [1, 2];
  const arr2 = [2, 1];
  const arr3 = [4, 2, 1, 3];
  const arr4 = [6, 4, 5, 2, 1, 3];
  const arr5 = [6, 4, 3, 2, 5, 1];

  it("#findSignatureCounts - should return the number of signatures each student gets", () => {
    const count = findSignatureCounts(arr);
    const count2 = findSignatureCounts(arr2);
    const count3 = findSignatureCounts(arr3);
    const count4 = findSignatureCounts(arr4);
    const count5 = findSignatureCounts(arr5);

    expect(count).toMatchObject([1, 1]);
    expect(count2).toMatchObject([2, 2]);
    expect(count3).toMatchObject([3, 1, 3, 3]);
    expect(count4).toMatchObject([4, 2, 4, 2, 4, 4]);
    expect(count5).toMatchObject([2, 2, 1, 2, 1, 2]);
  });
});
