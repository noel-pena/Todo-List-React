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
    try {
      await axios.delete(`/api/items/${itemId}`);
      setCheckedItems((prevChecked) => ({
        ...prevChecked,
        [itemId]: !prevChecked[itemId],
      }));

      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Grid container item pt={1}>
      <div className="item-container">
        {items.map((item) => (
          <div key={item._id} className="item item-row">
            <label className="checkbox-label hamburger">
              <input
                type="checkbox"
                checked={checkedItems[item._id] ? false : true}
                onChange={() => handleCheckboxChange(item._id)}
              />
              <CheckBox />
              <span className="item-text">{item.title}</span>
            </label>
          </div>
        ))}
      </div>
    </Grid>
  );
};

//// edit button feature, removing for now to have a better UI look
// const handleEditClick = (itemId) => {
//   // Implement your edit logic here (e.g., open a modal or navigate to an edit page)
//   console.log(`Editing item with ID ${itemId}`);
// };
{
  /* <button onClick={() => handleEditClick(item.id)}>Modify</button> */
}
