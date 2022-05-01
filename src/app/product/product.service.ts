import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
      }
      
       requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
      
    

  constructor(private http: HttpClient) { }


  getProducts()
  {
   return this.http.get("http://localhost:28668/api/product/getproduct", this.requestOptions);
      
  }

  getProductById(productId : number)
  {
    return this.http.get("http://localhost:28668/api/product/getproductbyid?productId="+productId, this.requestOptions);
       
   }

  addProduct(product: any)
  {
     return this.http.post("http://localhost:28668/api/product/addproduct", product, this.requestOptions);
  }

  updateProduct(product: any)
  {
      
  }

}