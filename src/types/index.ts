// src/types/index.ts

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
}

export interface AssortmentItem {
  titleKey: string;
  eng: string;
  colorClass: string;
}

export interface MetricItem {
  id: string;
  value: string;
  labelKey: string;
}