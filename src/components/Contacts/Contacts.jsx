import { ContactItem, BtnText, BtnDelete, NumberText } from "./Contacts.styles";
import { BsFillPersonDashFill } from "react-icons/bs";
import { BiWinkSmile } from "react-icons/bi";
import styles from "../../views/LogIn.module.css";
import {
  getContacts,
  getFilter,
} from "../../redux/phonebook/phonebook-selectors";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../helpers/getFilteredContacts";

import {
  fetchContacts,
  deleteContacts,
} from "../../redux/phonebook/phonebook-operations";
// import { css } from "@emotion/react";

const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const data = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.wrapper}>
      {data &&
        getVisibleContacts(data, filter).map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <BiWinkSmile size={18} />
              {name}:<NumberText>{number}</NumberText>
              <BtnDelete
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                <BtnText>Delete</BtnText>
                <BsFillPersonDashFill size={16} />
              </BtnDelete>
            </ContactItem>
          );
        })}
    </ul>
  );
};

export default Contacts;
