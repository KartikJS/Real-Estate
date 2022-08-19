import classes from "./DropDown.module.css";

const DropDown = (props) => {
  return (
    <select
      className={classes.btn}
      defaultValue={props.placeholder}
      onChange={props.onChange}
    >
      <option disabled>{props.placeholder}</option>
      {props.filter?.items?.map((item) => (
        <option value={item.value} key={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
