export interface Link {
  mainText: string;
  subText: string;
  link: string;
  thumbnailSrc: string;
  variant: 'default' | 'special' | 'cta';
}

export interface LinksData {
  links: Link[];
}
