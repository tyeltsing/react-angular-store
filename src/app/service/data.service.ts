import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {
  private products: any[] = [];

  constructor(private logService: LogService, private httpService : HttpService){ }

  getProducts(){
   return this.httpService._get('products.json')
      /* .subscribe(
        (data: Response) => {
          // console.log(data);
          let aux : any[] = [];
          for(let key in data){
            aux.push(data[key].nombre);
          }
          this.products = aux;
        }
      )
    return this.products; */
  }
}
