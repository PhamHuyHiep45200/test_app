import Banner from "./components/home/Banner";
import FlashSale from "./components/home/FlashSale";

export default async function Home() {

  const {items} = await fetch("https://dragonball-api.com/api/characters").then((res) => res.json());
  return (
    <>
      <Banner />
      <FlashSale products={items} />
    </>
  );
}
