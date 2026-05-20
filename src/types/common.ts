export type MediaAssetType = "image";

export interface MediaAsset {
  url: string;
  alt: string;
  type: MediaAssetType;
}

export interface Cta {
  url: string;
  text: string;
  ariaLabel: string;
  target: "_blank" | "_self";
}

export interface Footer {
  background: string;
  text: string;
}
