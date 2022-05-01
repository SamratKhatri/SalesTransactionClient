import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers:any;
  customerId:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  
  displayedColumns=['customerName','customerAddress','contactNo']
  getCustomers()
  {
    //console.log("trying to get rpoducts");
    this.http.get("http://localhost:28668/api/customer/getcustomer").subscribe(res=>{
      this.customers = res;
    });
  }

  customerSelected(row:any)
  {
     this.customerId = row.customerId;
  }

}
