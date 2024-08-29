import classes from "./QuickFilter.module.css";

function QuickFilter({ filters }) {
  const chips = ["See all", "Basic", "TNZ", "Short sleeves"];

  return (
    <div className={classes.quickFilter}>
      {chips.map((chip, index) => (
        <label key={index} className={classes.chip}>
          <input
            type="radio"
            name="filter"
            value={chip}
            defaultChecked={chip === "See all"}
            className={classes.hiddenInput}
          />
          {chip}
        </label>
      ))}
    </div>
  );
}

export default QuickFilter;
