import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Header, Products, ProductDetails, ProductList, Cart, Footer} from './components/ComponentExporter';
import { img1, img2, img3, img4, img5, img6, img1b, img2b, img3b, img4b, img5b, img6b } from './images/ImageExporter'
import { DataContext } from "./DataContext";
import { CartProvider } from "./CartContext";

function App() {
  const dataState = {
    "1": {
      name: "Nike HN Blazer (Gray)",
      img: img1,
      img2: img1b,
      price: 120,
      detail:
        "The Nike Blazer Mid '77 Infinite toughens up the old-school, b-ball icon that has become the go-to of the streets. Durable rubber details on the toe, heel and side let you take it where you want, day in and day out, while the piping and distorted Swoosh logo add a modern touch.",
    },
    "2": {
      name: "Nike Freak Forest (Green)",
      img: img2,
      img2: img2b,
      price: 135,
      detail:
        "The Zoom Freak 2 Naija nods to Nigeria—the homeland of Giannis's parents—where football is a uniting force for boundless potential, youthful exuberance and infectious charisma. Giannis's late father, Charles, bonded with his sons through the beautiful game, furthering Giannis's own passion for the sport. This bright-hued homage nods to that connection by dressing the silhouette in the same colours and textures that grace the kits of the Nigerian national team. The result perfectly encapsulates the spirit of Naija: audacious, fast, fun and stylish.",
    },
    "3": {
      name: "Nike Lebron Zephyer (Black)",
      img: img3,
      img2: img3b,
      price: 150,
      detail:
        "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, supportive heel to keep you moving and lifting comfortably.",
    },
    "4": {
      name: "Nike Metcon Sportage",
      img: img4,
      img2: img4b,
      price: 130,
      detail:
        "The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed and durability where you need it. It even includes a Hyperlift insert that's compatible with all prior versions of the Metcon. Meet your secret weapon for weight-lifting and high-impact training.",
    },
    "5": {
      name: "Nike Sport Plus",
      img: img5,
      img2: img5b,
      price: 150,
      detail:
        "The Nike Alpha Huarache brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forwards.",
    },
    "6": {
      name: "Nike SuperRep Go",
      img: img6,
      img2: img6b,
      price: 110,
      detail:
        "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
    },
  };

  const NotFound = () => <h4> Oops! Page not found </h4>;

  return (
    <div>
      <CartProvider>
        <DataContext.Provider value={dataState}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Products" element={<Products />}>
              <Route path="/" element={<ProductList />}></Route>
              <Route path=":productID" element={<ProductDetails />}></Route>
            </Route>
            <Route path="Cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          <Footer />
        </DataContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
