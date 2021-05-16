export interface Article {
  slug_name: string;
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  thumbnail_standard: string;
  item_type: string;
  source: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  first_published_date: string;
  material_type_facet: string;
  kicker: string;
  subheadline: string;
  des_facet: Array<string>;
  org_facet: any;
  per_facet: any;
  geo_facet: any;
  related_urls: any;
  multimedia: Array<{
    format: string;
    height: string;
    width: string;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
  }>;
}
