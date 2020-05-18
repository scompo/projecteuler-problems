import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { shouldSum, s3o5 } from "./problem1.js";

Deno.test("shouldSum returns true only for multiples of 3 and 5", async () => {
  assertEquals(shouldSum(3), true);
  assertEquals(shouldSum(5), true);
  assertEquals(shouldSum(9), true);
  assertEquals(shouldSum(10), true);
  assertEquals(shouldSum(1), false);
  assertEquals(shouldSum(2), false);
  assertEquals(shouldSum(100), true);
  assertEquals(shouldSum(30), true);
  assertEquals(shouldSum(0), true);
});

Deno.test("sumMultiplesOf3And5 works for numbers less than 10", async () => {
  s3o5(0, 10)
    .then((res) => {
      assertEquals(res, 23);
    });
});

Deno.test("sumMultiplesOf3And5 works for an empty interval", async () => {
  s3o5(0, 0)
    .then((res) => {
      assertEquals(res, 0);
    });
});
