import s from "./PhoneBookListItem.module.css";

const PhoneBookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={s.phoneBookListItem}>
      <p className={s.contact}>
        {name}: {number}
      </p>
      <button className={s.sliding_button} onClick={onDeleteContact} id={id}>
        Delete
      </button>
    </li>
  );
};

export default PhoneBookListItem;
