import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  
  API_POINT = './../assets/data/';
  // API_POINT = 'localhost:8000/';
  
  constructor(private http: Http) { }
  _get(url : string){
    return this.http.get(this.API_POINT + url)
      .map((response: Response)=> response.json())
  }

  sendDatos(usuario : any){
    const datos = JSON.stringify(usuario);
    return this.http.post('https://ejemplo-http-c4faa.firebaseio.com/.json', datos)
    .map((response: Response) => response.json()) 
  }
}
