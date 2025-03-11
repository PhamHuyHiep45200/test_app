export const productSaleApi = async () => {
  try {
    const { items: productSale } = await fetch(
      "https://dragonball-api.com/api/characters",
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return productSale;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const bannerCatsApi = async () => {
  try {
    const bannerCats = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=5",
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return bannerCats;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const slideBannerApi = async () => {
  try {
    const { akatsuki: slideBanner } = await fetch(
      "https://dattebayo-api.onrender.com/akatsuki",
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return slideBanner;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const topBandsApi = async () => {
  try {
    const topBands = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=16",
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return topBands;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const sellingsProductApi = async () => {
  try {
    const { items: sellingsProduct } = await fetch(
      "https://dragonball-api.com/api/characters?limit=9",
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return sellingsProduct;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const newArrivalsApi = async () => {
  try {
    const { items: newArrivals } = await fetch(
      "https://dragonball-api.com/api/characters?limit=10",
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return newArrivals;
  } catch (error) {
    console.log(error);
    return [];
  }
};
