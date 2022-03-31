import { useSelector } from "react-redux";
import { selectAllProducts } from "./Product/productSelectors";
import "./styles.css";

export default function App() {
  const products = useSelector(selectAllProducts);

  console.log(products);
  return <div className="App"></div>;
}
