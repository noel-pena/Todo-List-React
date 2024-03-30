import { Grid } from "@mui/material";
import { AddItem } from "./sub-components/AddItem";
import { ItemsToday } from "./sub-components/ItemsToday";

export const ContainerBox = () => {
  return (
    <Grid container className="container">
      <ItemsToday />
      <AddItem />
    </Grid>
  );
};
