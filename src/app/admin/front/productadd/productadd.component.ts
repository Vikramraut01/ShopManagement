import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {

  constructor(private http:HttpClient)
  {

  }

pro:Product=new Product();

addproduct()
{
this.http.post('http://localhost:8080/addProduct',this.pro).subscribe(
  (data:any)=>{
    if(data==null)
    {
      window.alert("Not added");
    }
    else{
      window.alert("Added successfully");
    }


  }
)  

}


}
