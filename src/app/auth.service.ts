import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
public loggedUser!:string; 
public isloggedIn: Boolean = false;
public roles!:string[];
public regitredUser : User = new User();
apiURL: string = 'http://localhost:8081/users';
token!:string;
constructor(private router: Router,
private http : HttpClient) { }
setRegistredUser(user : User){
  this.regitredUser=user;
  }
  getRegistredUser(){
  return this.regitredUser;
  }
login(user : User)
{
return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
}
private helper = new JwtHelperService();
saveToken(jwt:string){
localStorage.setItem('jwt',jwt);
this.token = jwt;
this.isloggedIn = true;
this.decodeJWT();
}
decodeJWT()
{ if (this.token == undefined)
 return;
const decodedToken = this.helper.decodeToken(this.token);
this.roles = decodedToken.roles;
this.loggedUser = decodedToken.sub;
}
loadToken() {
this.token = localStorage.getItem('jwt')!;
this.decodeJWT();
}
 getToken():string {
  return this.token;
  }



  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token= undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
    }

isAdmin():Boolean{
  if (!this.roles)
  return false;
 return this.roles.indexOf('ADMIN') >=0;
 }
  
 isTokenExpired(): Boolean
 {
 return this.helper.isTokenExpired(this.token); }


setLoggedUserFromLocalStorage(login : string) {
  this.loggedUser = login;
  this.isloggedIn = true;
  // this.getUserRoles(login);
   }
   registerUser(user :User){
    return this.http.post<User>(this.apiURL+'/register', user,
    {observe:'response'});
    }
    validateEmail(code : string){
      return this.http.get<User>(this.apiURL+'/verifyEmail/'+code);
      } 
}
