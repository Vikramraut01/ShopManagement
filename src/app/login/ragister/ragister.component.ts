import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/user/user';


@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent 
{
constructor(private http:HttpClient)
{}

user:User=new User();


ragister(userName:string,passWord:string)
{
 this.http.post('http://localhost:8080/ragister'+userName+"and"+passWord,this.user).subscribe(
(data:any)=>
{
if(data==1)
{  
  window.alert("Please Enter valid Mail");
}
else if(data==2)
{
  window.alert("Alredy Registered");
}
else if(data==-1)
{
  window.alert("Check exception");
}
else
{
  window.alert("Register sucessful");
 
}

}
 );

}

}
