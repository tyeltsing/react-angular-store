import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  product = {};

  constructor() { }
  ngOnInit() {
  }

}
