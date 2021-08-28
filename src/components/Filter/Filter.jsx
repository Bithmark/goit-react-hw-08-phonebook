import { InputFind } from "./Filter.styles";

import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { filter } from "../../redux/phonebook/phonebook-actions";
import css from "../../views/LogIn.module.css";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <h6 className={css.sliding_button}>Find contacts by name</h6>
      <InputFind type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Filter;
