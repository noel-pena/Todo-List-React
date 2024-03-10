import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const ContainerBox = () => {
  return (
    <Grid2
      container
      pt={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 container item className="container"></Grid2>
    </Grid2>
  );
};
