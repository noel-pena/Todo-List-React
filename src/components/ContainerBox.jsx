import { Grid } from "@mui/material";
import { AddItem } from "./sub-components/AddItem";

export const ContainerBox = () => {
  const StyledContainer = {
    height: "650px",
    width: "325px",
    borderRadius: "10px",
    background: "linear-gradient(145deg, #438387, #4f9ba1)",
    boxShadow: "31px 10px 30px #3e7a7e, -20px -10px 40px #56a8ae",
  };

  return (
    <Grid container pt={3} style={{}} className="container">
      <AddItem />
    </Grid>
  );
};
