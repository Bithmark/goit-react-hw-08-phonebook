import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import ContactsView from "../components/Contacts/Contacts";
// import Section from "../components/Section/Section";
import css from "./LogIn.module.css";

function Contacts() {
  return (
    <div className={css.wrapper}>
      <h5 className={css.sliding_button}>Phonebook </h5>
      {/* <Section title="Phonebook" className={css.sliding_button}> */}
      <Form />
      {/* </Section> */}
      <h5 className={css.sliding_button}>Contacts </h5>
      {/* <Section title="Contacts"> */}
      <Filter />
      <ContactsView />
      {/* </Section> */}
    </div>
  );
}

export default Contacts;
