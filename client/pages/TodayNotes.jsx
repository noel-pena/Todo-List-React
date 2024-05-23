import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Items } from "../components/Items";
import { AddItem } from "../components/sub-components/AddItem";
import { Footer } from "../components/Footer";
import { Grid, CssBaseline } from "@mui/material";

function TodayNotes() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Title titlePage="TODAY" />
      <Grid container className="container">
        <Items getRequest="items" />
        <AddItem customPostRoute="/api/add" />
      </Grid>
      <Footer />
    </>
  );
}

export default TodayNotes;
