export interface ProductType {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string;
}

export interface BannerItemType {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface SlideBannerItemType {
  id: number;
  name: string;
  images: string[];
}

export interface OnSellingProductsType {
  mal_id: number
  url: string
  titles: string
  images: string
  favorites: number
  count: number
  established: string
  about: string
}