import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  availableProducts: Product[]=[];
    
  selectedProducts: Product[]=[];
  
  public draggedProduct:any;
  
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
      this.selectedProducts = [];
      this.productService.getProductsSmall().then(products => this.availableProducts = products);
  }
  
  dragStart(event:any,product: Product) {
      this.draggedProduct = product;
  }
  
  drop(event:any) {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
          this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
         this.draggedProduct = null;
      }
  }
  
  dragEnd(event:any) {
      this.draggedProduct = null;
  }
  
  findIndex(product: Product) {
      let index = -1;
      for(let i = 0; i < this.availableProducts.length; i++) {
          if (product.id === this.availableProducts[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }

}
