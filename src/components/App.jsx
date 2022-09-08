import React from "react";
import contacts from "../contact.js";
import Avatar from "./Avatar";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      idNo={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQE845JU__fwLw/profile-displayphoto-shrink_800_800/0/1650998049444?e=1668038400&v=beta&t=6XokGijFKL-AV1jsrINhZ-xKbB0497fE55YI1NAv2D8" />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
