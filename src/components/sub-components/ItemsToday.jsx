import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CheckBox } from "./CheckBox";
import axios from "axios";

export const ItemsToday = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, []);

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = async (itemId) => {
    setCheckedItems((prevChecked) => ({
      ...prevChecked,
      [itemId]: !prevChecked[itemId],
    }));

    // Remove the item from the list if unchecked
    if (!checkedItems[itemId]) {
      try {
        // Send a DELETE request to the backend
        await axios.delete(`/api/items/${itemId}`);
        console.log(`Item with ID ${itemId} deleted successfully.`);

        // Update the state to remove the item from the list
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  //// edit button feature, removing for now to have a better UI look
  // const handleEditClick = (itemId) => {
  //   // Implement your edit logic here (e.g., open a modal or navigate to an edit page)
  //   console.log(`Editing item with ID ${itemId}`);
  // };

  return (
    <Grid container item pt={1}>
      <div className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item item-row">
            <label className="checkbox-label hamburger">
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <CheckBox />
              <span className="item-text">{item.title}</span>
              {/* <button onClick={() => handleEditClick(item.id)}>Modify</button> */}
            </label>
          </div>
        ))}
      </div>
    </Grid>
  );
};
