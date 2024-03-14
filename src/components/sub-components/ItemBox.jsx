import { useState } from "react";
import { Grid } from "@mui/material";
import { CheckBox } from "./CheckBox";

export const ItemBox = () => {
  const items = [
    { id: 1, title: "this is an item" },
    { id: 2, title: "this is another item" },
    { id: 3, title: "this is another item!" },
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevChecked) => ({
      ...prevChecked,
      [itemId]: !prevChecked[itemId],
    }));
  };

  const handleEditClick = (itemId) => {
    // Implement your edit logic here (e.g., open a modal or navigate to an edit page)
    console.log(`Editing item with ID ${itemId}`);
  };

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
              <button onClick={() => handleEditClick(item.id)}>Edit</button>
            </label>
          </div>
        ))}
      </div>
    </Grid>
  );
};
