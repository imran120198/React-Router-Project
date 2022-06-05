function Card({ id, title, image, category, price, description }) {
    return (
      <div
        style={{
          display: "flex",
          gap: 2,
          padding: 5,
          margin: 2,
          border: "5px solid blcak",
          background: "aqua"
        }}
      >
        <img style={{ width: "200px" }} src={image} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            margin: 2,
            padding: 2
          }}
        >
          <h3>{title}</h3>
          <h2>Price : {price}₹</h2>
          <p>{category}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;