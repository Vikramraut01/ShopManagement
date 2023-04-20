import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
private use!:User;

public getuser()
{
  return this.use;
}
public setuser(usera:User)
{
  this.use=usera;
}


}
