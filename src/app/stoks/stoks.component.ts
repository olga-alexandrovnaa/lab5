import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

class Stok {
  name: string;
  distribution: string;
  max: number;
  price: number;
  count: number;
  id: number;
  constructor(name: string, distribution: string, max: number, price: number, count: number, id: number) {
    this.name = name;
    this.distribution = distribution;
    this.max = max;
    this.price = price;
    this.count = count;
    this.id = id;
  }
}

@Component({
  selector: 'app-stoks',
  templateUrl: './stoks.component.html',
  providers: [HttpService]
})
export class StoksComponent implements OnInit {

  stocks: Stok[];
  name: string;
  distribution: string;
  max: number;
  price: number;
  count: number;
  id: number;

  constructor(private httpService: HttpService){}
  ngOnInit() {
    this.Init();
  }

  delete(id: number) {
    const index = this.stocks.findIndex(function (stocks) {
      return stocks.id == id;
    });
    this.stocks.splice(index, 1);
    this.httpService.set_stoks(this.stocks).subscribe();
  }

  edit() {
    this.httpService.set_stoks(this.stocks).subscribe();
  }

  add() {
    if(!(document.querySelector('#number1')[0].value<0 || document.querySelector('#number3')[0].value<0 || document.querySelector('#number2')[0].value<0) ){
      this.id = this.stocks[this.stocks.length - 1].id + 1;
      this.stocks.push(new Stok(this.name, this.distribution, this.max, this.price, this.count, this.id));
      this.httpService.set_stoks(this.stocks).subscribe();
    }
  }

  Init() {
    this.httpService.get_stoks().subscribe((date: any) => {
      this.stocks = date;
      console.log(this.stocks);
    });
  }

}
