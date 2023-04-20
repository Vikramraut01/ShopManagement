import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceComponent } from './face/face.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[FaceComponent]
})
export class OuserModule { }
