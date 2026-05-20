import { describe, expect, it } from "vitest";

import {
  canNavigateBack,
  canNavigateBackToReferrer,
  canUseHistoryBack,
} from "@/lib/navigation";

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

describe("canUseHistoryBack", () => {
  it("returns true when the session has a previous history entry", () => {
    expect(canUseHistoryBack(2)).toBe(true);
  });

  it("returns false on the first history entry", () => {
    expect(canUseHistoryBack(1)).toBe(false);
  });
});

describe("canNavigateBack", () => {
  const origin = "http://localhost:3000";

  it("allows back when referrer is missing but history has a previous entry", () => {
    expect(
      canNavigateBack({
        referrer: "",
        currentOrigin: origin,
        historyLength: 2,
      }),
    ).toBe(true);
  });

  it("falls back to home navigation when referrer and history are empty", () => {
    expect(
      canNavigateBack({
        referrer: "",
        currentOrigin: origin,
        historyLength: 1,
      }),
    ).toBe(false);
  });

  it("allows back for same-origin referrers without relying on history", () => {
    expect(
      canNavigateBack({
        referrer: "http://localhost:3000/",
        currentOrigin: origin,
        historyLength: 1,
      }),
    ).toBe(true);
  });
});
