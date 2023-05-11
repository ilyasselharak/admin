import { initMongoose } from "@/lib/mongoose";
import { findAllContacts } from "./api/Contacts";
import Header from "@/Components/Header";

export default function Home({ contact }) {
  return (
    <>
      <Header />
      <main></main>
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
