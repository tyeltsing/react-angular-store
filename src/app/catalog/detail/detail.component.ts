import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from "./../../service/data.service";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  product:any = {
    name:'',
    price:'',
    stock:'',
    img:'aguacate.jpg',
  };

  constructor(
    private route: ActivatedRoute,
    private DataService: DataService,
    private location: Location
  ) {
    this.findproduct();
   }

  ngOnInit(): void {
    // this.findproduct();
  }

  findproduct(): void {

    const id = +this.route.snapshot.paramMap.get('id');

    this.DataService.getProducts()
      .subscribe(
        (data: Response) => {
          let aux : any;
          for (let key in data) {
            if (id == data[key].id){
              this.product = data[key];
              break;
            }
          }
        }
      )
  }

}
