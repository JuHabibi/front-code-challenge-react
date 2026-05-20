import type { ArticleContentBlock, ArticlePageData } from "@/types/article";
import type { HomeContentBlock, HomePageData } from "@/types/homepage";

const HOME_BLOCK_TYPES = new Set<HomeContentBlock["type"]>(["HERO", "CARD_GRID"]);
const ARTICLE_BLOCK_TYPES = new Set<ArticleContentBlock["type"]>([
  "HERO_ARTICLE",
  "PARAGRAPH",
  "CAROUSEL",
]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateHomePageData(data: HomePageData): string[] {
  const errors: string[] = [];

  if (!isNonEmptyString(data.title)) {
    errors.push("title must be a non-empty string");
  }

  if (!isNonEmptyString(data.keywords)) {
    errors.push("keywords must be a non-empty string");
  }

  if (data.pageType !== "HOMEPAGE") {
    errors.push(`pageType must be HOMEPAGE, got ${data.pageType}`);
  }

  if (!Array.isArray(data.content) || data.content.length === 0) {
    errors.push("content must be a non-empty array");
  } else {
    data.content.forEach((block, index) => {
      if (!HOME_BLOCK_TYPES.has(block.type)) {
        errors.push(`content[${index}] has unknown type: ${block.type}`);
      }
    });

    if (!data.content.some((block) => block.type === "HERO")) {
      errors.push("content must include a HERO block");
    }

    if (!data.content.some((block) => block.type === "CARD_GRID")) {
      errors.push("content must include a CARD_GRID block");
    }

    const cardGrid = data.content.find((block) => block.type === "CARD_GRID");
    if (cardGrid && cardGrid.type === "CARD_GRID") {
      if (cardGrid.cards.length === 0) {
        errors.push("CARD_GRID must include at least one card");
      }

      cardGrid.cards.forEach((card, index) => {
        if (!isNonEmptyString(card.id)) {
          errors.push(`CARD_GRID.cards[${index}].id must be a non-empty string`);
        }

        if (!isNonEmptyString(card.backgroundAsset?.url)) {
          errors.push(`CARD_GRID.cards[${index}].backgroundAsset.url is required`);
        }
      });
    }
  }

  if (!isNonEmptyString(data.footer?.text)) {
    errors.push("footer.text must be a non-empty string");
  }

  if (!isNonEmptyString(data.footer?.background)) {
    errors.push("footer.background must be a non-empty string");
  }

  return errors;
}

export function validateArticlePageData(data: ArticlePageData): string[] {
  const errors: string[] = [];

  if (!isNonEmptyString(data.title)) {
    errors.push("title must be a non-empty string");
  }

  if (!isNonEmptyString(data.keywords)) {
    errors.push("keywords must be a non-empty string");
  }

  if (data.pageType !== "ARTICLE") {
    errors.push(`pageType must be ARTICLE, got ${data.pageType}`);
  }

  if (!Array.isArray(data.content) || data.content.length === 0) {
    errors.push("content must be a non-empty array");
  } else {
    data.content.forEach((block, index) => {
      if (!ARTICLE_BLOCK_TYPES.has(block.type)) {
        errors.push(`content[${index}] has unknown type: ${block.type}`);
      }
    });

    if (!data.content.some((block) => block.type === "HERO_ARTICLE")) {
      errors.push("content must include a HERO_ARTICLE block");
    }

    const carousel = data.content.find((block) => block.type === "CAROUSEL");
    if (carousel && carousel.type === "CAROUSEL" && carousel.items.length === 0) {
      errors.push("CAROUSEL must include at least one item");
    }
  }

  if (!isNonEmptyString(data.footer?.text)) {
    errors.push("footer.text must be a non-empty string");
  }

  if (!isNonEmptyString(data.footer?.background)) {
    errors.push("footer.background must be a non-empty string");
  }

  return errors;
}
