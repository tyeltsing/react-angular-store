import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogService } from './../service/log.service';
import { DataService } from "./../service/data.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers : [LogService]
})

export class CatalogComponent implements OnInit {
	title = 'Catálogo de Productos'
	searchInput = ' ¿Qué estas Buscando?'
	userFilter: any = { name: '' };
	/* products: any[] =[
		{index: 0, name: "zanahoria", img:"zanahoria.jpg",price: 76,unid: 44},
		{index: 1, name: "cebolla", img:"cebolla.jpg",price: 94,unid: 35},
		{index: 2, name: "arandanos", img:"arandanos.jpg",price: 51,unid: 79},
		{index: 3, name: "almendras", img:"almendras.jpg",price: 23,unid: 37},
		{index: 4, name: "canela", img:"canela.jpg",price: 93,unid: 49},
		{index: 5, name: "calabaza", img:"calabaza.jpg",price: 53,unid: 29},
		{index: 6, name: "naranja", img:"naranja.jpg",price: 69,unid: 35},
		{index: 7, name: "lychee", img:"lychee.jpg",price: 76,unid: 28},
		{index: 8, name: "papa", img:"papa.jpg",price: 38,unid: 55},
		{index: 9, name: "aguacate", img:"aguacate.jpg",price: 70,unid: 47},
		{index: 10, name: "limon", img:"limon.jpg",price: 90,unid: 28},
		{index: 11, name: "manzana", img:"manzana.jpg",price: 15,unid: 31},
		{index: 12, name: "ajo", img:"ajo.jpg",price: 97,unid: 58},
		{index: 13, name: "tomate", img:"tomate.jpg",price: 28,unid: 25},
		{index: 14, name: "brocoli", img:"brocoli.png",price: 11,unid: 68},
		{index: 15, name: "pasta", img:"pasta.jpg",price: 43,unid: 29},
		{index: 16, name: "maiz", img:"maiz.jpg",price: 28,unid: 54},
		{index: 17, name: "pimienta", img:"pimienta.jpg",price: 85,unid: 49},
		{index: 18, name: "kiwi", img:"kiwi.jpg",price: 93,unid: 34},
		{index: 19, name: "fresa", img:"fresa.jpg",price: 57,unid: 55},
		{index: 20, name: "repollo", img:"repollo.jpg",price: 35,unid: 76}
	]; */
	products : any[] = [];
	
	constructor(private logService: LogService, private dataService : DataService) { 
		// this.products = this.dataService.getProducts();
	}
	
	showDetails(item){
		alert('showDetails '+ item)
		this.logService.escribirLog("Test : Item " + item)
		this.dataService.getProducts()
			.subscribe(
				(data: Response) => {
					// console.log(data);
					let aux: any[] = [];
					for (let key in data) {
						aux.push(data[key]);
					}
					this.products = aux;
				}
			)
	}
	addCart(item){
		alert('addCart '+ item)
	}
	ngOnInit() {
		this.dataService.getProducts()
		.subscribe(
			(data: Response) => {
				// console.log(data);
				let aux: any[] = [];
				for (let key in data) {
					aux.push(data[key]);
				}
				this.products = aux;
			}
		)
			
	}
	



}
