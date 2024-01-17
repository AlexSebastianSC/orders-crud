import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService} from './product.service';
import { Product } from './product';
import { ItemOrder } from './itemOrder';
import { SharedDataService } from './shared-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formproducts',
  templateUrl: './formproducts.component.html',
  styleUrls: ['./formproducts.component.css']
})
export class FormproductsComponent implements OnInit{
  products: Product[] =[];
  selectedProductId: number;
  selectedProductPrice: number;
  quantity: number = 1;
  itemOrders: ItemOrder[] = [];
  selectedProduct: Product;
  availableProducts: Product[] = [];
  isEditing : boolean =false;
  editedItemIndex: number;

  constructor(private router: Router,
    private productService: ProductService,
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.productService.getProductos().subscribe(products => {
      this.products = products;
      this.route.params.subscribe(params => {
        const productId = +params['productId'];
        if(productId){
          console.log("productId")
          console.log(productId)
          this.loadSelectedProduct(productId);
          this.isEditing = true;
          let arrayPrueb : ItemOrder[] = this.sharedDataService.getItemOrders();
          console.log(arrayPrueb.findIndex(item=>item.productId==productId));

          this.editedItemIndex = arrayPrueb.findIndex(item=>item.productId==productId);

        }else{
          this.updateAvailableProducts();
        }
      });
      console.log('Products:', this.products);
    });
  }

  onCancelButtonClick(): void {
    if (this.isEditing) {
      this.router.navigate(['addedit/form']);
    } else {
      this.selectedProductId = null;
      this.selectedProduct = null;
      this.selectedProductPrice = null;
      this.quantity = 1;
    }
  }


  loadSelectedProduct(productId: number): void {
    if (this.products.length === 0) {
      this.productService.getProductos().subscribe(products => {
        this.products = products;
        this.loadSelectedProduct(productId);
      });
    } else {
      // La lista de productos ya está cargada, busca el producto seleccionado.
      const selectedProductIndex = this.products.findIndex(product => product.id === productId);

      if (selectedProductIndex !== -1) {
        this.selectedProduct = this.products[selectedProductIndex];
        this.selectedProductId = this.selectedProduct.id;
        this.selectedProductPrice = this.selectedProduct ? this.selectedProduct.price : null;
        this.quantity = this.itemOrders.find(itemOrder => itemOrder.productId === productId)?.quantity || 1;
      } else {
        console.error(`Product with id ${productId} not found.`);
      }
    }
  }

  onChangeProduct(): void {
    if (this.selectedProductId !== null && this.selectedProductId !== undefined) {
      this.selectedProduct = this.products.find(product => product.id === Number(this.selectedProductId));
      this.selectedProductPrice = this.selectedProduct ? this.selectedProduct.price : null;

    }
  }

  calculateTotalPrice(): number {
    const totalPrice = +(this.selectedProductPrice * this.quantity).toFixed(2);
    if (totalPrice){
      return totalPrice;
    }else{
      return 0
    }
    //return +(this.selectedProductPrice * this.quantity).toFixed(2);
  }

  onOKButtonClick(): void{
    if (this.selectedProduct) {
      const newItemOrder: ItemOrder = {
        productId: this.selectedProduct.id,
        productName: this.selectedProduct.name,
        unitPrice: this.selectedProduct.price,
        quantity: this.quantity,
        totalPrice: this.calculateTotalPrice()
      };

      if (this.isEditing) {
        console.log("Index:", this.editedItemIndex);
        this.itemOrders[this.editedItemIndex] = newItemOrder;
        this.sharedDataService.updateItemOrder(this.editedItemIndex, newItemOrder);

      } else {
        this.itemOrders.push(newItemOrder);
        this.sharedDataService.addItemOrder(newItemOrder);
      }


      this.selectedProductId = null;
      this.selectedProduct = null;
      this.selectedProductPrice = null;
      this.quantity = 1;

      this.updateAvailableProducts();
      this.router.navigate(['addedit/form']);
    }
  }

  updateAvailableProducts(): void {
    console.log('All Products:', this.products);
    console.log('Item Orders:', this.itemOrders);

    const allProducts = this.products;

    const selectedProductIds = this.sharedDataService.getItemOrders().map(itemOrder => itemOrder.productId);

    this.availableProducts = allProducts.filter(product => !selectedProductIds.includes(product.id));

  }


}
