import { Injectable } from '@angular/core';
import { Boisson } from './model/boisson.model';
import { Type } from './model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeWrapper } from './model/TypeWrapped.model';
import { AuthService } from './auth.service';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class BoissonService {
  apiURL: string = 'http://localhost:8090/boisson/api';
  apiURLType: string = 'http://localhost:8090/boisson/type';
  constructor(private http : HttpClient,
         private authService : AuthService) {
    
    }
    rechercherParNom(nom: string):Observable< Boisson[]> {
      const url = `${this.apiURL}/boisByName/${nom}`;
      return this.http.get<Boisson[]>(url);
      }
      ajouterType( t: Type):Observable<Type>{
        return this.http.post<Type>(this.apiURLType, t, httpOptions);
        }
       
     listetypes():Observable<TypeWrapper>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<TypeWrapper>(this.apiURLType,{headers:httpHeaders});
      }



    listeBoisson(): Observable<Boisson[]>{
      let jwt = this.authService.getToken();
         jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Boisson[]>(this.apiURL+"/all",{headers:httpHeaders});
      }





      ajouterBoisson( bois: Boisson):Observable<Boisson>{
        let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<Boisson>(this.apiURL+"/addbois", bois,  {headers:httpHeaders});
        }
  
        supprimerBoisson(id : number) {
          const url = `${this.apiURL}/delbois/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})

          return this.http.delete(url,  {headers:httpHeaders});
          }
          consulterBoisson(id: number): Observable<Boisson> {
            const url = `${this.apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Boisson>(url,{headers:httpHeaders});
            }
    

  updateBoisson(b :Boisson) : Observable<Boisson>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Boisson>(this.apiURL+"/updatebois",  b, {headers:httpHeaders});
  }

    
  
    
     rechercherParType(IdType: number): Observable<Boisson[]> {
      const url = `${this.apiURL}/boissontype/${IdType}`;
      let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Boisson[]>(url, {headers:httpHeaders});
      } 
}
