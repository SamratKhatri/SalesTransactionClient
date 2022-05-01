import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import {MatTableModule} from '@angular/material/table';
import { CustomerComponent } from './customer/customer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from './product/product.service';
import { SalesTransactionComponent } from './sales-transaction/sales-transaction.component';
import { SalesTransactionFormComponent } from './sales-transaction/sales-transaction-form/sales-transaction-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    
    CustomerComponent,
         DialogComponent,
         ProductFormComponent,
         SalesTransactionComponent,
         SalesTransactionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
