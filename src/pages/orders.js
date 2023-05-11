import { initMongoose } from "@/lib/mongoose";
import React from "react";

import Header from "@/Components/Header";
import { findAllOrders } from "./api/Orders";

export default function Inbox({ contact }) {
  return (
    <>
      <Header />
      <div className="mt-32 text-center">
        {contact.map((item) => (
          <div>
            <div>Email: {item.email} </div>
            <div>Name: {item.name} </div>
            <div>Prices: {item.price} </div>
            <div>methods:{item.method}</div>
            <div>packages:{item.address}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const orders = await findAllOrders();
  return {
    props: {
      contact: JSON.parse(JSON.stringify(orders)),
    },
  };
}
