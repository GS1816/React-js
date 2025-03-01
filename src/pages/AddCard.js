import React, { useState } from "react";
import { addCard } from "../services/api";

const AddCard = () => {
  const [card, setCard] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setCard({ ...card, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addCard(card);
    setMessage(response.message);
    if (response.card)
      setCard({ name: "", email: "", phone: "", company: "", position: "" });
  };

  return (
    <div>
      <h2>Add Visiting Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={card.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={card.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={card.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={card.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={card.position}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Card</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCard;
