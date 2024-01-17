import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersSharedDataService {

  private orders: Order[] = [];
  editingOrder: { order: Order, index: number };
  editingOrderIndex: number = -1;

  constructor() { }
  getOrders(): Order[] {
    return this.orders;
  }

  dropOrders(): void{
    this.orders = [];
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  deleteOrder(order: Order): void {
    const index = this.orders.indexOf(order);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }

  updateOrder(index: number, newOrder: Order):void{
    console.log(index,newOrder);
    this.orders[index] = null;
    this.orders[index] = newOrder;
  }

  // Nuevo método para establecer el item y el índice de edición
  setEditingOrder(order: Order, index: number): void {
    this.editingOrder = { order, index };
  }

  getEditingOrder(): Order {//{ itemOrder: ItemOrder, index: number } {
    return this.editingOrder.order;
  }

  clearEditingItem(): void {
    this.editingOrder = null;
    this.editingOrderIndex = -1;
  }

}
