import PhoneList from "@/components/PhoneList";

export default function Home() {
  const DUMMY_PHONES = [
    {
      id: "p1",
      title: "iPhone 12 Pro Max",
      description: "A large phone with one of the best screens",
      price: 699,
      img: "https://i.expansys.net/img/b/328764/apple-iphone-12-pro-max-67-5g-dual-sim-a2412.jpg",
    },
    {
      id: "p2",
      title: "Google Pixel 4",
      description: "A great phone with one of the best cameras",
      price: 499,
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/p4_top.PNG",
    },
    {
      id: "p3",
      title: "Samsung Galaxy S20",
      description: "A great phone with one of the best cameras",
      price: 599,
      img: "https://i.expansys.net/img/b/328851/samsung-galaxy-s20-fe-fan-edition-5g-dual-sim-sm-g781b-ds.jpg",
    },
    {
      id: "p4",
      title: "iPhone 14 Pro Max",
      description: "A large phone with one of the best screens",
      price: 699,
      img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg",
    },
    {
      id: "p5",
      title: "Samsung Galaxy S23 Ultra",
      description:
        "Meet the Samsung Galaxy S23 series and take the Galaxy features you love to the next level. Take stunning photos no matter the lighting with Nightography. Power your day with the fastest Snapdragon processor yet and an impressive battery life. Simply spectacular.",
      price: 699,
      img: "https://www.bell.ca/Styles/wireless/Samsung_S23_Ultra/Samsung_Galaxy_S23_Ultra_Green_5G_plus_lrg1.png",
    },
  ];
  return (
    <div>
      <h1 className="text-blue-600 text-3xl font-bold">
        Shophone- Shop your favorite iPhone / smartphone
      </h1>

      <PhoneList phones={DUMMY_PHONES} />
    </div>
  );
}
