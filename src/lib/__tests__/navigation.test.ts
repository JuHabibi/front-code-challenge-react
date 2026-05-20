import { describe, expect, it } from "vitest";

import { canNavigateBackToReferrer } from "@/lib/navigation";

describe("canNavigateBackToReferrer", () => {
  const origin = "http://localhost:3000";

  it("returns false when referrer is empty", () => {
    expect(canNavigateBackToReferrer("", origin)).toBe(false);
    expect(canNavigateBackToReferrer(undefined, origin)).toBe(false);
  });

  it("returns true when referrer is same origin", () => {
    expect(canNavigateBackToReferrer("http://localhost:3000/", origin)).toBe(
      true,
    );
    expect(
      canNavigateBackToReferrer("http://localhost:3000/article", origin),
    ).toBe(true);
  });

  it("returns false when referrer is another origin", () => {
    expect(canNavigateBackToReferrer("https://google.com/", origin)).toBe(
      false,
    );
  });

  it("returns false for invalid referrer", () => {
    expect(canNavigateBackToReferrer("not-a-url", origin)).toBe(false);
  });
});
