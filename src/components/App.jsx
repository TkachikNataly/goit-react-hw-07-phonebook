// import React, { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
// import shortid from "shortid";
import ContactList from "./ContactList/ContactList";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  )


}


