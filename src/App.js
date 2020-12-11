import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Header, Products, LimitedEdition, Men, Women, Kids, Sale, Login, ProductDetails, ProductList, Cart, Footer} from './components/ComponentExporter';
import { img1, img2, img3, img4, img5, img6, img1b, img2b, img3b, img4b, img5b, img6b } from './images/ImageExporter'
import { DataContext } from "./DataContext";
import { CartProvider } from "./CartContext";

function App() {
  const dataState = {
    "1": {
      name: "Nike Blazer Mid '77",
      img: img1,
      img2: img1b,
      price: 120,
      detail:
        "The Nike Blazer Mid '77 are durable rubber details on the toe, heel and side let you take it where you want, day in and day out, while the piping and distorted Swoosh logo add a modern touch.",
    },
    "2": {
      name: "Nike Freak 2 Naija",
      img: img2,
      img2: img2b,
      price: 135,
      detail:
        "The Freak 2 Naija nods to Nigeria—the homeland of Giannis's parents—where football is a uniting force for boundless potential, youthful exuberance and infectious charisma.",
    },
    "3": {
      name: "Nike Air Zoom SuperRep",
      img: img3,
      img2: img3b,
      price: 150,
      detail:
        "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, supportive heel.",
    },
    "4": {
      name: "Nike Metcon 5",
      img: img4,
      img2: img4b,
      price: 130,
      detail:
        "The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed and durability where you need it.",
    },
    "5": {
      name: "Nike Alpha Huarache",
      img: img5,
      img2: img5b,
      price: 150,
      detail:
        "The Nike Alpha Huarache brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forwards.",
    },
    "6": {
      name: "Nike Phantom Run",
      img: img6,
      img2: img6b,
      price: 110,
      detail:
        "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor.",
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
              <Route path="/" element={<ProductList />}/>
              <Route path=":productID" element={<ProductDetails />}/>
            </Route>
            <Route path="LimitedEdition" element={<LimitedEdition />}>
              <Route path="/" element={<ProductList />}/>
              <Route path=":productID" element={<ProductDetails />}/>
            </Route>
            <Route path="Men" element={<Men />}>
              <Route path="/" element={<ProductList />}/>
              <Route path=":productID" element={<ProductDetails />}/>
            </Route>
            <Route path="Women" element={<Women />}>
              <Route path="/" element={<ProductList />}/>
              <Route path=":productID" element={<ProductDetails />}/>
            </Route>
            <Route path="Kids" element={<Kids />}>
              <Route path="/" element={<ProductList />}/>
              <Route path=":productID" element={<ProductDetails />}/>
            </Route>
            <Route path="Sale" element={<Sale />}>
              <Route path="/" element={<ProductList />}/>
              <Route path=":productID" element={<ProductDetails />}/>
            </Route>
            <Route path="Login" element={<Login />}/>
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
