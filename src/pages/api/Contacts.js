import Contact from "@/modules/Contact";

export async function findAllContacts() {
  return Contact.find().exec();
}
