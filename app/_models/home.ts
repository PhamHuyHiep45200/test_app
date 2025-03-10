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
  id: string
  url: string
  width: number
  height: number
}