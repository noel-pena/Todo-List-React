import { Grid } from "@mui/material";

export const AddItem = () => {
  return (
    <Grid container item>
      <form className="input-group" action="/add" method="post">
        <input
          className="input-box"
          type="text"
          name="newItem"
          autoComplete="off"
          autoFocus="true"
          placeholder="Type here"
        />
        <button
          className="submit-button item-text"
          type="submit"
          name="list"
          value="<%listTitle %>"
        >
          Add
        </button>
      </form>
    </Grid>
  );
};
