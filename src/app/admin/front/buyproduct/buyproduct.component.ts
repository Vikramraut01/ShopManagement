import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Buydata } from 'src/app/buydata/buydata';
import { MyserviceService } from 'src/app/myservice.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent {
  constructor(public service:MyserviceService,private http:HttpClient){}
  buypro:Buydata []=[];
show=0;
  getAllBuyPro(num:number)
  {
this.http.get('http://localhost:8080/getAllBuyPro').subscribe(
  (data:any)=>{
    if(data==null)
    {
      window.alert("Check exception");
    }
    else
    {
     
      this.show=num;
this.buypro=data;
    }
  }

)

  }

}
