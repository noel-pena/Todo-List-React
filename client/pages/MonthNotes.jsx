import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { AddItem } from "../components/sub-components/AddItem";
import { Grid } from "@mui/material";
import { Items } from "../components/sub-components/Items";
function TodayNotes() {
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

export default TodayNotes;
