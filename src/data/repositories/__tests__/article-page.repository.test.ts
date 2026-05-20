import { describe, expect, it } from "vitest";

import { getArticlePageData } from "@/data/repositories/article-page.repository";
import { validateArticlePageData } from "@/lib/page-data.validation";

describe("getArticlePageData", () => {
  it("exposes a valid article page", () => {
    const data = getArticlePageData();

    expect(validateArticlePageData(data)).toEqual([]);
    expect(data.pageType).toBe("ARTICLE");
    expect(data.content.some((block) => block.type === "HERO_ARTICLE")).toBe(
      true,
    );
    expect(data.content.some((block) => block.type === "CAROUSEL")).toBe(true);
  });
});
