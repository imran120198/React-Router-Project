import { Link } from "react-router-dom";

export default function AllProductCard({ image, title, price, id }) {
  return (
    <div>
      <img style={{ width: "100px" }} src={image} alt="" />
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <Link to={`/${id}`}>
          <p>About More</p>
        </Link>
      </div>
    </div>
  );
}