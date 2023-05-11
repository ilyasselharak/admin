import Orders from "@/modules/Orders";

export async function findAllOrders() {
  return Orders.find().exec();
}
