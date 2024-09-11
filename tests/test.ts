import { expect, test } from "@playwright/test";
import { getNumber } from "$lib/example";

test("index page has expected h1", async ({ page }) => {
  expect(1).toEqual(getNumber());
});
