import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://medilink.mk";

interface RouteMeta {
  title: string;
  description: string;
}

const DEFAULT_META: RouteMeta = {
  title: "Medilink | Medical Equipment & Healthcare Supplies",
  description:
    "Medilink supplies certified medical equipment, single-use medical devices, and professional healthcare solutions in North Macedonia. Contact us for product catalogs and availability.",
};

const ROUTE_META: Record<string, RouteMeta> = {
  "/": DEFAULT_META,
  "/products": {
    title: "Medical Products Catalog | Medilink",
    description:
      "Browse Medilink's registered medical devices, sterile single-use consumables, diagnostic tools, and healthcare supplies.",
  },
  "/partners": {
    title: "Our Partners | Medilink",
    description:
      "Explore Medilink's international healthcare partnerships and certified medical product categories.",
  },
  "/about": {
    title: "About Us | Medilink",
    description:
      "Learn about Medilink's mission, quality standards, and distribution of medical equipment and supplies in North Macedonia.",
  },
  "/contact": {
    title: "Contact Medilink | Medical Equipment & Supplies",
    description:
      "Get in touch with Medilink for product availability, catalogs, and healthcare supply inquiries.",
  },
};

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertMeta(attrName: "name" | "property", attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useCanonical(forceNoIndex = false) {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.replace(/^\/+|\/+$/g, "");

    let canonicalPath = "/";
    if (cleanPath === "" || cleanPath === "home") {
      canonicalPath = "/";
    } else if (cleanPath === "coming-soon") {
      canonicalPath = "/products";
    } else {
      canonicalPath = `/${cleanPath}`;
    }

    const canonicalHref = `${SITE_URL}${canonicalPath}`;
    const meta = ROUTE_META[canonicalPath] ?? DEFAULT_META;

    document.title = meta.title;
    upsertLink("canonical", canonicalHref);
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", canonicalHref);
    upsertMeta(
      "name",
      "robots",
      forceNoIndex ? "noindex, nofollow" : "index, follow"
    );
  }, [pathname, forceNoIndex]);
}