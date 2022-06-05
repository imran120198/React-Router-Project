import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Cards";
import { useParams } from "react-router-dom";

const getProductDetails = (id) => {
  return axios.get("https://fakestoreapi.com/products/" + id);
};

export default function ProductDetails() {
  const { id } = useParams();
  const [isLoding, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const handeleGetProduct = async () => {
    try {
      setIsLoading(true);
      const list = await getProductDetails(id);
      setData(list);
      console.log(list);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handeleGetProduct();
  }, []);

  if (isLoding) {
    <div>...Looding</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 5,
        margin: 2,
        justifyContent: "center",
        margin: "auto",
        width: "50%"
      }}
    >
      <h3>Product Id {id}</h3>
      <div>
        <Card
          id={id}
          // {...data}
          image={data?.data.image}
          title={data?.data.title}
          price={data?.data.price}
          category={data?.data.category}
          description={data?.data.description}
        />
      </div>
      {/* {id !== "1" && <Link to={`/home/${Number(id)-1}`}>Prev</Link>}
      <Link to={`/home/${Number(id) + 1}`}>Next</Link> */}
    </div>
  );
}