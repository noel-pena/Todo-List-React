import { useState } from "react";
import { Grid } from "@mui/material";

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
              />{" "}
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
              <span className="item-text">{item.title}</span>
            </label>
          </div>
        ))}
      </div>
    </Grid>
  );
};
