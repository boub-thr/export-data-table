import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }

   //fetch Data 0
   getCommandes() {
     console.log("inside the function");
    return this.http.get<any>("http://192.168.1.201:8900/fleetnm-commande/commandes/");
  }
}
