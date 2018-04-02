import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
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
	@Input('findString') findString : string = "";
	products : any[] = [];
	
	constructor(private logService: LogService, private dataService : DataService) { 
		// this.products = this.dataService.getProducts();
	}
	
	ngOnInit() {
		this.getAll();
	}

	showDetails(item){
		alert('showDetails '+ item)
		this.logService.escribirLog("Test : Item " + item)
		
	}
	addCart(item : number, amount : number){
		alert('addCart '+ item + " => "+ amount )
	}

	keyDownSearch(value){
		this.findString = value;
		if(this.findString.length <= 2){
			this.getAll();
			return;
		}
		
		// console.log("event", this.findString);
		var regex = RegExp(this.findString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), "i");
		this.dataService.getProducts()
			.subscribe(
				(data: Response) => {
					let aux: any[] = [];
					for (let key in data) {
						let exists = data[key].name.toLowerCase().search(regex);
						if (exists != -1)
							aux.push(data[key]);
					}
					this.products = aux;
				}
			)
	}


	getAll(){
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
