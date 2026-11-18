export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
}

export interface AssortmentItem {
  id: string;
  titleKey: string;
  eng: string;
  image: string;
}

export interface MetricItem {
  id: string;
  value: string;
  labelKey: string;
}

export interface PartnerHighlightData {
  partnerName: string;
  partnerUrl: string;
  logoSrc: string;
  logoAlt: string;
  subtitleKey: string;
  badgeKey: string;
  titleKey: string;
  descPart1Key: string;
  descPart2Key: string;
  ctaRoute: string;
  ctaKey: string;
}

export interface PartnerCategory {
  titleKey: string;
  descKey: string;
}

export interface PartnerDetailItem {
  id: string;
  badgeKey: string;
  logoSrc: string;
  logoAlt: string;
  originKey: string;
  bioKey: string;
  websiteUrl: string;
  websiteLinkKey: string;
  portfolioTitleKey: string;
  categories: PartnerCategory[];
}

export interface AboutPartnerItem {
  id: string;
  titleKey: string;
  p1Key: string;
  p2Key: string;
}