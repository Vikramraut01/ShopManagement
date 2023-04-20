import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RagisterComponent } from './ragister/ragister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { User } from '../user/user';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MainComponent,
    RagisterComponent,
    UserloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    ],
    exports: [MainComponent]
 
})
export class LoginModule { }
