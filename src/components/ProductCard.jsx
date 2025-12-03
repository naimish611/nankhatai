import { useState } from "react";

export default function ProductCard({ product }) {
  const [qty, setQty] = useState("1 KG");
  const [price, setPrice] = useState(
    product.type === "chocolate" ? 450 : 400
  );

  const changeQty = (value) => {
    setQty(value);

    if (product.type === "chocolate") {
      // 🔥 Chocolate Price Logic
      if (value === "1 KG") setPrice(450);
      else if (value === "500g") setPrice(225);
    } else {
      // 🔥 Normal Price Logic (Elaichi, Orange)
      if (value === "1 KG") setPrice(400);
      else if (value === "500g") setPrice(200);
    }
  };

  const sendToWhatsApp = () => {
    const phone = "919328271512";

    const message = `
Hello! I want to order:

Product: ${product.name}
Quantity: ${qty}
Price: ₹${price}

// Delivery Address:
// Khodal Dham Township, Khalilpur Road,
// Mahadev Apartment, Room No. 405
    `;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="card">
      <img className="product-img" src={product.img} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">₹{price}</p>

      <select className="qty-select" onChange={(e) => changeQty(e.target.value)}>
        <option value="1 KG">1 KG</option>
        <option value="500g">500g</option>
      </select>

      <br /><br />

      <button className="whatsapp-btn" onClick={sendToWhatsApp}>
        Order on WhatsApp
      </button>
    </div>
  );
}
