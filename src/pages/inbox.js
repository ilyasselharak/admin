import { initMongoose } from "@/lib/mongoose";
import React from "react";
import { findAllContacts } from "./api/Contacts";
import Header from "@/Components/Header";

export default function Inbox({ contact }) {
  return (
    <>
      <Header />
      <div className="mt-32 text-center">
        {contact.map((item) => (
          <div>
            <div>Email: {item.email} </div>
            <div>Name: {item.name} </div>
            <div>Message: {item.message} </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const contacts = await findAllContacts();
  return {
    props: {
      contact: JSON.parse(JSON.stringify(contacts)),
    },
  };
}
