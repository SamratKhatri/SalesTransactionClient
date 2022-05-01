import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  model: any= {};
  productId: any;
  constructor(private ps: ProductService, private router: Router, route: ActivatedRoute) { 
    this.productId = route.snapshot.params["productId"];
  }

  ngOnInit(): void {
    
    if(this.productId)
    {
      //getProductById()
    }
  
  }

  save()
  {
    console.log("model values", this.model);
    if(!this.model.productId){
    this.ps.addProduct(this.model).subscribe((res) =>{
      alert("Product added");
      this.router.navigate(['product']);
    });
  }else{
    // edit
  }
  }

  getProductById()
  {
    this.ps.getProductById(this.productId).subscribe(res =>{
      this.model = res;
    });
  }

}
