import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema({
  email: String,
  name: String,
  message: String,
});

const Contact = models?.Contact || model("Contact", ContactSchema);

export default Contact;
