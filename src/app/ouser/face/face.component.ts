import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Product } from 'src/app/product/product';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent {
  constructor(public service:MyserviceService,private http:HttpClient){}
isShow=0;
avProduct:Product []=[];
getAllProduct(num:number)
{
  this.http.get('http://localhost:8080/avProduct').subscribe(
    (data:any)=>{
      if(!data)
      {
        window.alert("Exception");
      }
      else
      {
        this.isShow=num;
        this.avProduct=data;
        
      }

    }
  )
}

buy(userQuantity:string,productQuantity:number,productId:number)
{
 let userQnum=parseInt(userQuantity);
 if(userQnum>productQuantity)
 {
  window.alert("Enter valid Number.");
 }
 else
 {
  if(window.confirm("yes or no"))
 {
  
this.http.get('http://localhost:8080/updateQuantity'+userQnum+"and"+productId).subscribe(
  (data:any)=>{
    if(!data)
    {
window.alert("Something wrong");
  }
  else
  {
for(let i=0; i<this.avProduct.length; i++)
{
 
  
  if(this.avProduct[i].id==productId)
  {
    this.avProduct[i].productQuantity=(this.avProduct[i].productQuantity-userQnum);
    break;
  }

}
this.addProductInUser(this.service.getuser().id,productId,userQnum);
  }
}
)
 }
 }
}

addProductInUser(userId:number,productId:number,userQnum:number)
{

  this.http.get('http://localhost:8080/addProductInUser'+userId+"and"+productId+"and"+userQnum).subscribe(
    (data:any)=>{
      if(!data)
      {
        
        window.alert("Product Not Added In User Account.");
      }
      else
      {
        console.log(userId+" "+productId+" "+userQnum);
        window.alert("Product Successfully Added.");
      }



    }
  )
}

}

