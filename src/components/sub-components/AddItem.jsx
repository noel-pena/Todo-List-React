export const AddItem = () => {
  return (
    <>
      <form className="input-group" action="/add" method="post">
        <input
          type="text"
          name="newItem"
          placeholder="New Item"
          autoComplete="off"
          autoFocus="true"
        />
        <button
          className="submit-button"
          type="submit"
          name="list"
          value="<%listTitle %>"
        >
          Add
        </button>
      </form>
    </>
  );
};
