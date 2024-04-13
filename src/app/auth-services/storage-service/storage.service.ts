import { Injectable } from '@angular/core';
import { StringifyOptions } from 'querystring';
const TOKEN = 'token'
const USER = 'user'
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }
  static saveUser(user:any):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
  }
  static getToken():string{
    return localStorage.getItem(TOKEN);
  }
  static getUser():any{
    return JSON.parse(localStorage.getItem(USER));

  }
  static getUserRole():string{
    const user = this.getUser();
    if(user==null){
      return '';
    }
    return user.role;
  }
 static isAdminLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = this.getToken();
      if (token === null) {
        return false;
      }
      const role: string = this.getUserRole();
      return role === 'ADMIN';
    }
    return false;
  }

  static isCustomerLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = this.getToken();
      if (token === null) {
        return false;
      }
      const role: string = this.getUserRole();
      return role === 'CUSTOMER';
    }
    return false;
  }
    static signout(){
      if (typeof localStorage !== 'undefined'){
        window.localStorage.removeItem(USER);
        window.localStorage.removeItem(TOKEN);
      }
    }
}

