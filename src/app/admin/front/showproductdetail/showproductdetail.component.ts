import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-showproductdetail',
  templateUrl: './showproductdetail.component.html',
  styleUrls: ['./showproductdetail.component.css']
})
export class  ShowproductdetailComponent implements OnInit{
  constructor(private http:HttpClient){

  }
  public allproduct:Product []=[];

  ngOnInit(): void {

    this.http.get('http://localhost:8080/getAllProduct').subscribe(
      (data:any)=>{
        if(!data)
        {
          window.alert("Not detected");
        }
        else{
          this.allproduct=data;
        }
        

      }
    )
  }
  isShow=0;
  getalldetails(num:number)
  {
this.isShow=num;
  }

}
