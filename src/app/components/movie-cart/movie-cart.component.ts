import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.css']
})
export class MovieCartComponent implements OnInit {
@Input() showData:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  showModal:boolean=false;
  cartData : any;
  name :string ="";
  language:string ="";
  quantity : number=0;
  newItem:any;
  movieData:any;
  movieName:string="";
  addToCart(data:any): void{
    this.showModal=true;
    this.cartData=[];
    for (let i = 0, len = data.length; i < len; i++) {
      this.movieName =data[i].movieName;
      this.newItem = {
        'name':data[i].movieName, 
        'quantity': data[i].quantity, 
        'language':data[i].language
      };
      this.cartData.push(this.newItem);
    }
  }

  hide(){
    this.showModal=false;
  }
  
}