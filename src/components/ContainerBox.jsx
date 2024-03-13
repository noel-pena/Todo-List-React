import { Grid } from "@mui/material";
import { AddItem } from "./sub-components/AddItem";
import { ItemBox } from "./sub-components/ItemBox";

export const ContainerBox = () => {
  return (
    <Grid container className="container">
      <ItemBox />
      <AddItem />
    </Grid>
  );
};
