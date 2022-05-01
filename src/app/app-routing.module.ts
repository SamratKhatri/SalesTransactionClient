import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { SalesTransactionFormComponent } from './sales-transaction/sales-transaction-form/sales-transaction-form.component';

const routes: Routes = [
  {
    path:'product',
    component: ProductComponent
  },{
    path:'productform',
    component: ProductFormComponent
  },{
    path:'productform/:productId',
    component: ProductFormComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'salestransactionform',
    component:SalesTransactionFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
