import { Grid } from "@mui/material";

export const ItemBox = () => {
  const items = [
    { id: 1, title: "this is an item" },
    { id: 2, title: "this is another item" },
    { id: 3, title: "this is another item!" },
  ];

  return (
    <Grid container item>
      <div className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item item-text">
            {item.title}
          </div>
        ))}
      </div>
    </Grid>
  );
};
