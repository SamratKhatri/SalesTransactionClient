import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';


export interface productData{
  productId:number,
  productName:string,
  productRate:string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any;
  productId: any;

  constructor(private ps: ProductService) {
   }

  ngOnInit(): void {
    this.getProducts();
  }

displayedColumns=['productName','productRate']
  getProducts()
  {
    console.log("trying to get rpoducts");
    this.ps.getProducts().subscribe(res=>{
      this.products = res;
    });
    
  }

  productSelected(row:any)
  {
     this.productId = row.productId;
  }
  

}
