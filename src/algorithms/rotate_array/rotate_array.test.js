import { rotate } from "./rotate_array";

describe("rotat_array", () => {
  const nums1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ];
  const k1 = 38;
  const expected1 = [
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16,
  ];

  const nums2 = [1, 2, 3, 4, 5, 6, 7];
  const k2 = 3;
  const expected2 = [5, 6, 7, 1, 2, 3, 4];

  const nums3 = [-1, -100, 3, 99];
  const k3 = 2;
  const expected3 = [3, 99, -1, -100];

  const nums4 = [1, 2, 3, 4, 5, 6];
  const k4 = 4;
  const expected4 = [3, 4, 5, 6, 1, 2];

  it("#rotate - should rotate an array to the right by `k` rotations", () => {
    rotate(nums1, k1);
    rotate(nums2, k2);
    rotate(nums3, k3);
    rotate(nums4, k4);

    expect(nums1).toMatchObject(expected1);
    expect(nums2).toMatchObject(expected2);
    expect(nums3).toMatchObject(expected3);
    expect(nums4).toMatchObject(expected4);
  });
});
