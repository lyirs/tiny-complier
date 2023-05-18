/*
 * @Author:
 * @Date: 2023-03-27 18:30:41
 * @LastEditTime: 2023-03-27 18:30:54
 * @Description:
 */
import { test, expect } from "vitest";
import { compiler } from "./compiler";
test("compiler", () => {
  const code = `(add 2 (subtract 4 2))`;

  expect(compiler(code)).toBe("add(2, subtract(4, 2));");
});
