import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { AddItem } from "../components/sub-components/AddItem";
import { Grid } from "@mui/material";
import { Items } from "../components/Items";

function MonthNotes() {
  return (
    <>
      <Header />
      <Title />
      <Grid container className="container">
        <Items getRequest="items3" />
        <AddItem customPostRoute="/api/add3" />
      </Grid>
      <Footer />
    </>
  );
}

export default MonthNotes;
