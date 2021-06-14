import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  public getCambio(): Observable<any> {
    return this.http.get<any>('https://az.gt/tipodecambio/cambiodeldia.json');
  }


}
