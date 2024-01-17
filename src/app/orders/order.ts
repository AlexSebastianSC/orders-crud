import { ItemOrder } from "../addedit/itemOrder";

export class Order {
  //id: number;
  orderNumber: number;
  createAt: Date;
  itemOrders: ItemOrder[];
  finalPrice: number;

}
