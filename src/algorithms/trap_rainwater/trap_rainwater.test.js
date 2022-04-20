import { trap } from "./trap_rainwater.js";

describe("trap_rainwater", () => {
  const elevation1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  const elevation2 = [4, 2, 0, 3, 2, 5];
  const volume1 = 6;
  const volume2 = 9;

  it("#trap - should sum up the total volume of rain water trapped in the given elevation map", () => {
    expect(trap(elevation1)).toBe(volume1);
    expect(trap(elevation2)).toBe(volume2);
  });
});
