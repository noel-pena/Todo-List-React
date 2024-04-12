import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Items } from "../components/Items";
import { AddItem } from "../components/sub-components/AddItem";
import { Footer } from "../components/Footer";
import { Grid } from "@mui/material";

function TodayNotes() {
  return (
    <>
      <Header />
      <Title />
      <Grid container className="container">
        <Items getRequest="items" />
        <AddItem customPostRoute="/api/add" />
      </Grid>
      <Footer />
    </>
  );
}

export default TodayNotes;
