import { add, sub, addCustom, subCustom } from ".";

describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });
  });
  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の合計は、下限が'0'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
  describe ("addCustom", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(addCustom(100, 100)).toBe(200);
    });
    test("返り値の合計上限は、'200'である。", () => {
      expect(addCustom(150, 150)).toBe(200);
    });
  });
  describe ('subCustom', () => {
    test("返り値は、第一引数と第二引数の「差」である。", () => {
      expect(subCustom(0, 10)).toBe(-10);
    });
    test("返り値の下限は、'-10'である。", () => {
      expect(subCustom(0, 20)).toBe(-10);
    });
  });
});
