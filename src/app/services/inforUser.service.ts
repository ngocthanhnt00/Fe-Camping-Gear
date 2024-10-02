import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InforUserService {
  public user: any = null
  constructor() { }

  getUser() {
    const data = localStorage.getItem("user") || '';
    const userData = data ? JSON.parse(data) : {}
    console.log(this.user, "CheckUser")
    return userData.displayname
  }
}
