import { HttpClient } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor(private http:HttpClient,private appcom:AppComponent,public service:MyserviceService)
  {

  }


  userlogin(username:string,password:string)
  {
  this.http.get('http://localhost:8080/use'+username+"and"+password).subscribe(
    (data:any)=>{
       if(data==1)
       {
        window.alert("Please Register First");
        }
       else if(data==2)
       {
      window.alert("Wrong Password");
       }
       else if(data==-1)
      {
      window.alert("Check exception");
      }
      else{
        
     this.http.get('http://localhost:8080/getrole'+username).subscribe(
     (data:any)=>{
       this.service.setuser(data);
       this.appcom.role=this.service.getuser().role;
       
          }
      )
     
      }



    }
   )
   }

   


  

}
