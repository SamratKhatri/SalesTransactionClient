import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-sales-transaction-form',
  templateUrl: './sales-transaction-form.component.html',
  styleUrls: ['./sales-transaction-form.component.scss']
})
export class SalesTransactionFormComponent implements OnInit {

  model: any ={};
  
  products: any = [];
  customers: any = [];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts()
  {
    this.ps.getProducts().subscribe(res=>{
      this.products = res;
    });
    
  }

  save(){}


  productSelected(product: any)
  {
    console.log("test");
    let val = this.products.find((x:any) => x.productId == product.source.selected.value);
    this.model.rate = val.productRate;
  }

}
