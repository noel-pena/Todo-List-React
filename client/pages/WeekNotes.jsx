import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { AddItem } from "../components/sub-components/AddItem";
import { Footer } from "../components/Footer";
import { Grid } from "@mui/material";
import { Items } from "../components/Items";

function WeekNotes() {
  return (
    <>
      <Header />
      <Title titlePage="WEEK" />
      <Grid container className="container">
        <Items getRequest="items2" />
        <AddItem customPostRoute="/api/add2" />
      </Grid>
      <Footer />
    </>
  );
}

export default WeekNotes;
