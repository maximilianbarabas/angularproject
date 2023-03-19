import { productModel } from './../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products!: productModel[]; 

  constructor(private proser:ProductService) {

  }

  ngOnInit(): void {
this.proser.AllProducts.subscribe(res=>{
  
  this.products=res
console.log(this.products);

});

  }

  search(input: any)
  {
    this.proser.getFromDb(input);


  }

}
