import { Grid } from "@mui/material";

export const Title = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        item
        pt={8}
        sx={{
          flexDirection: "column",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 200,
          lineHeight: "0.75",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            fontSize: "2.5rem",
            letterSpacing: "0.25rem",
          }}
        >
          Todo
        </span>
        <p>
          Write <span style={{ fontWeight: 500 }}>down</span>, Check{" "}
          <span style={{ fontWeight: 500 }}>off</span>
        </p>
      </Grid>
    </Grid>
  );
};
