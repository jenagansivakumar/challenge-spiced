import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

test("add two plus three ", () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative ", () => {
  const result = add(10, -50);

  expect(result).toBeLessThan(0);
});
test("returns a value close to 0.3 if called with add(0.1, 0.2) ", () => {
  const result = add(0.1, 0.2);

  expect(result).toBeCloseTo(0.3);
});

//subtract tests
test("returns 10 if called with subtract(15, 5) ", () => {
  const result = subtract(15, 5);

  expect(result).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one ", () => {
  const result = subtract(15, 5);

  expect(result).toBe(10);
});
