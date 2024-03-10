import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Title = () => {
  return (
    <Grid2
      container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        item
        pt={6}
        sx={{
          flexDirection: "column",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 200,
          lineHeight: "0.75",
        }}
      >
        <span style={{ fontWeight: 500, fontSize: "2.5rem" }}>Todo</span>
        <p>
          Write <span style={{ fontWeight: 500 }}>down</span>, Check{" "}
          <span style={{ fontWeight: 500 }}>off</span>
        </p>
      </Grid2>
    </Grid2>
  );
};
