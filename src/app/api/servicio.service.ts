import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private Url = "../../assets/data/";

  constructor(private http: HttpClient) { }

  public getCatalogo() {
    return new Promise(resolve => {
      this.http.get(this.Url + 'catalogo.json')
        .subscribe(data => {
          resolve(data['data']);
        },
          error => {
            console.error(error);
          });
    })

  }

  public getAlquiler() {
    return new Promise(resolve => {
      this.http.get(this.Url + 'alquiler.json')
        .subscribe(data => {
          resolve(data['data']);
        },
          error => {
            console.error(error);
          });
    })

  }
}
