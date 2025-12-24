import React, { useState } from "react";
import kit1 from "../assets/Trainingkits/Kicad-7-PCB-Layout...jpg";
import kit2 from "../assets/Trainingkits/advanced-circuit-board-stockcake.jpg";
import kit3 from "../assets/Trainingkits/close-up-modern-circuit-board-processor_23-2151977504.avif";
import kit4 from "../assets/Trainingkits/free-photo-of-pcb-in-hand.jpeg";
import kit5 from "../assets/Trainingkits/futuristic-circuit-board-glowing-technology-innovation-modern-design_191095-90301.avif";
import kit6 from "../assets/Trainingkits/unnamed.jpg";
import "../App.css";

const products = [
  { id: 1, name: "VLSI Training Kit-1", price: 299, image: kit1 },
  { id: 2, name: "VLSI Training Kit-2", price: 500, image: kit2 },
  { id: 3, name: "VLSI Training Kit-3", price: 799, image: kit3 },
  { id: 4, name: "VLSI Training Kit-4", price: 899, image: kit4 },
  { id: 5, name: "VLSI Training Kit-5", price: 699, image: kit5 },
  { id: 6, name: "VLSI Training Kit-6", price: 999, image: kit6 },
];

function TrainingKit() {
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const indiaPhoneRegex = /^[6-9]\d{9}$/;

  function handleEnquire(product) {
    setSelectedProduct(product);
    setShowForm(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
 if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    }

 function handleSubmit(e) {
  e.preventDefault();

  if (!indiaPhoneRegex.test(formData.phone)) {
    setPhoneError("Please enter a valid 10-digit phone number starting with 6-9.");
    return;
  }

  setPhoneError("");

  const enquiryData = {
    ...formData,
    product: selectedProduct.name,
  };

  fetch("http://localhost:5000/send-enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enquiryData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send enquiry");
      return res.json();
    })
    .then((data) => {
      console.log("Enquiry Submitted:", data);
      alert("Your enquiry has been sent!");

      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedProduct(null);
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("There was a problem sending your enquiry. Please try again.");
    });
}


  return (
   <div className="container">
  <h1>Training Kits</h1>
  <p>Explore our hands-on training kits for VLSI, Embedded Systems, and AI/ML.</p>

  <div className="main-content">
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
          <button onClick={() => handleEnquire(product)} className="button-add">
            Enquire
          </button>
        </div>
      ))}
    </div>

    {showForm && (
      <div className="enquiry-form">
        <h2>Enquiry for: {selectedProduct?.name}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
                <label>Phone:</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  required
                />
                {phoneError && (
                  <p style={{ color: "red", marginTop: "4px" }}>{phoneError}</p>
                )}
              </div>
          <div>
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </div>
          <div>
            <button type="submit" className="send-button">Send Enquiry</button>
            <button onClick={() => setShowForm(false)} type="button" className="button-cancel" style={{ marginLeft: "10px" }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
</div>

  );
}

export default TrainingKit;
