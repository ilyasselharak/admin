import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema({
  packages: Object,
  name: String,
  price: String,
  email: String,
  address: String,
  city: String,
  phone: String,
  method: String,
  paid: { type: Number, defaultValue: 0 },
});

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
