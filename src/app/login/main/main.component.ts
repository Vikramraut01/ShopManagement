import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

isShow:number=0;
whatToShow(num:number)
{
this.isShow=num;
}

}
