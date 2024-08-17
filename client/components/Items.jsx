/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CheckBox } from "./sub-components/CheckBox";
import axios from "axios";

export const Items = ({ getRequest }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/${getRequest}`);
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
      await axios.delete(`/api/${getRequest}/${itemId}`);
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
