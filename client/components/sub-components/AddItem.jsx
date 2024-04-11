/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

export const AddItem = ({ customPostRoute }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(customPostRoute, { newItem }); // Use the custom post route
      console.log("Item added successfully.");
      window.location.reload();
    } catch (error) {
      console.log("Error adding item:", error);
    }
  };

  const hasLetters = /[a-zA-Z]/.test(newItem);

  return (
    <>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          name="newItem"
          autoComplete="off"
          autoFocus={true}
          placeholder="Type here"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        {hasLetters && (
          <button className="submit-button item-text" type="submit">
            Add
          </button>
        )}
      </form>
    </>
  );
};
