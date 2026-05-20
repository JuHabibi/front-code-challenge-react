import { describe, expect, it } from "vitest";

import { getHomePageData } from "@/data/repositories/home-page.repository";
import { validateHomePageData } from "@/lib/page-data.validation";

describe("getHomePageData", () => {
  it("exposes a valid homepage", () => {
    const data = getHomePageData();

    expect(validateHomePageData(data)).toEqual([]);
    expect(data.pageType).toBe("HOMEPAGE");
    expect(data.content.some((block) => block.type === "HERO")).toBe(true);
    expect(data.content.some((block) => block.type === "CARD_GRID")).toBe(true);
  });
});
