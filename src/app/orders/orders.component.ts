import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Order } from './order';
import { OrdersSharedDataService } from './orders-shared-data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders: Order[] = [];

  constructor( private router: Router,
    private route: ActivatedRoute,
    private ordersSharedDataService: OrdersSharedDataService) {}

  ngOnInit() {
    this.orders = this.ordersSharedDataService.getOrders();

  }

  deleteOrder(order: Order): void {
    console.log(order);
    const index = this.ordersSharedDataService.getOrders().indexOf(order);
    if(index !== -1){
      this.ordersSharedDataService.getOrders().splice(index,1)
    }
    console.log(this.ordersSharedDataService)
    //this.ordersSharedDataService.deleteOrder(order);
  }


  editOrder(order: Order, index: number):void{
    // Guarda el item a editar en el servicio SharedDataService
    this.ordersSharedDataService.setEditingOrder(order, index);
    // Navega al componente FormProductsComponent
    //this.router.navigate(['/addedit/form/'+order]);
  }

  onOKButtonClick(): void {
    // Verificar si se ha seleccionado un producto
    /*
    if (this.selectedProduct) {
      const newItemOrder: ItemOrder = {
        productId: this.selectedProduct.id,
        productName: this.selectedProduct.name,
        unitPrice: this.selectedProduct.price,
        quantity: this.quantity,
        totalPrice: this.calculateTotalPrice()
      };

      if (this.isEditing) {
        // Si estamos en modo edición, actualizamos el item existente
        console.log("Index:", this.editedItemIndex);
        this.itemOrders[this.editedItemIndex] = newItemOrder;

        // También actualizamos el array en SharedDataService
        this.sharedDataService.updateItemOrder(this.editedItemIndex, newItemOrder);

      } else {
        // Si no estamos en modo edición, agregamos el nuevo item
        this.itemOrders.push(newItemOrder);
        this.sharedDataService.addItemOrder(newItemOrder);
      }


      //this.sharedDataService.itemOrders.push(newItemOrder);
      this.selectedProductId = null;
      this.selectedProduct = null;
      this.selectedProductPrice = null;
      this.quantity = 1;

      this.updateAvailableProducts();
      this.router.navigate(['addedit/form']); //corregir
    }*/
  }

}
