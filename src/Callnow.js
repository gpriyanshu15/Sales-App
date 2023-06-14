import React, { useState } from "react";
import "./styles/callnow.css";
// znvknezjeb
// xnjbvkzehmd
const Callnow = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setName = "";
    setPhone = "";
    try {
      const response = await fetch("http://localhost:5000/details/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
    
  };

  const handleCallNow = () => {
    window.location.href = "tel:+917894661230";
  };

  return (
    <div class="callpage">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleCallNow}>Call Now : (+91)7894661230</button>
    </div>
  );
};

export default Callnow;
