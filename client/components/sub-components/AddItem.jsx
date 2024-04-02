import axios from "axios";
import { useState } from "react";

export const AddItem = () => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/add", { newItem });
      console.log("Item added successfully.");
      window.location.reload();
    } catch (error) {
      console.log("Error adding item:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value.trim());
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
          onChange={handleInputChange}
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
