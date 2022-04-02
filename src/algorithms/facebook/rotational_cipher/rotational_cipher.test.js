import { rotationalCipher } from "./rotational_cipher.js";

describe("rotational_cipher", () => {
  const input1 = "Zebra-493?";
  const factor1 = 3;
  const output1 = "Cheud-726?";

  const input2 = "abcdefghijklmNOPQRSTUVWXYZ0123456789";
  const factor2 = 39;
  const output2 = "nopqrstuvwxyzABCDEFGHIJKLM9012345678";

  it("#rotationalCipher - should return the rotated characters", () => {
    const result1 = rotationalCipher(input1, factor1);
    const result2 = rotationalCipher(input2, factor2);

    expect(result1).toBe(output1);
    expect(result2).toBe(output2);
  });
});
