import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  constructor(public service:MyserviceService){}

isshow:number=0;
whatToShow(num:number)
{
  this.isshow=num;

}



}
