import { checkUrl } from "./checkURL";

describe("Testing checkUrl function", () => {
  test("check if checkUrl is defined", () => {
    expect(checkUrl).toBeDefined();
  });
  test("check if valid url returns true", () => {
    expect(checkUrl("https://www.sensetime.com/en")).toBe(true);
    expect(checkUrl("https://www.w3schools.com/")).toBe(true);
    expect(checkUrl("https://stackoverflow.com/")).toBe(true);
  });
  test("check if invalid url returns false", () => {
    expect(checkUrl("")).toBe(false);
    expect(checkUrl("w3schools")).toBe(false);
    expect(checkUrl("https://stackerflow")).toBe(false);
  });
});
