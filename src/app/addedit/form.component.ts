import { SharedDataService } from './shared-data.service';
import { Component,OnInit } from '@angular/core';
import { Order } from '../orders/order';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemOrder } from './itemOrder';
import { ProductService } from './product.service';
import { OrdersSharedDataService } from '../orders/orders-shared-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public order:Order = new Order();
  public titulo:string = "New order";
  public errores: string[];
  itemOrders: ItemOrder[] = [];
  public isEditing :boolean =false;;


  constructor(private router: Router,
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private orderSharedDataService: OrdersSharedDataService) {}

  ngOnInit(){
    this.route.url.subscribe(() => {
      this.itemOrders = this.sharedDataService.getItemOrders();//itemOrders;

    });

  }

  addOrder() {

    if (this.itemOrders.length > 0) {
      const orderNumber = Math.floor(Math.random() * 1000); // Genera un número aleatorio único
      const order: Order = {
        orderNumber: orderNumber,
        createAt: new Date(),
        itemOrders: this.itemOrders,
        finalPrice: this.calculateTotalPrice()
      };

      this.orderSharedDataService.addOrder(order);

      // Limpiar la lista de productos en SharedDataService
      this.itemOrders = [];
      this.sharedDataService.dropItemOrders();

      //this.router.navigate(['/add-order']);
    } else {
      // Puedes manejar el caso donde no hay productos en la orden
      console.log('No hay productos en la orden.');
    }

  }

  calculateTotalPrice(): number {
    return this.itemOrders.reduce((total, itemOrder) => total + itemOrder.totalPrice, 0);
  }

  deleteItemOrder(itemOrder: ItemOrder): void {
    console.log(itemOrder);
    const index = this.sharedDataService.getItemOrders().indexOf(itemOrder);
    //console.log(this.sharedDataService)
    if (index !== -1) {
      this.sharedDataService.getItemOrders().splice(index, 1);
      //console.log("this.sharedDataService.itemOrders.splice(index, 1);")
      //console.log(this.sharedDataService.itemOrders.splice(index, 1))
    }
    console.log(this.sharedDataService)

  }

  editItemOrder(itemOrder: ItemOrder, index: number):void{
    // Guarda el item a editar en el servicio SharedDataService
    this.sharedDataService.setEditingItem(itemOrder, index);
    // Navega al componente FormProductsComponent
    this.router.navigate(['/addedit/formproducts/'+itemOrder.productId]);
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
