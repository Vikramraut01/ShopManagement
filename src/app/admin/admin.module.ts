import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front/front.component';

import { FormsModule } from '@angular/forms';
import { ProductaddComponent } from './front/productadd/productadd.component';
import { ShowproductdetailComponent } from './front/showproductdetail/showproductdetail.component';
import { BuyproductComponent } from './front/buyproduct/buyproduct.component';



@NgModule({
  declarations: [
    FrontComponent,
    ProductaddComponent,
    ShowproductdetailComponent,
    BuyproductComponent,
   
   
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[FrontComponent]
})
export class AdminModule { }
