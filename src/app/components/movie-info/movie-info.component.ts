import {  Component, OnDestroy, OnInit,ViewChild } from '@angular/core';

import { MovieCartComponent } from '../../components/movie-cart/movie-cart.component';
declare var $: any;
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {
  @ViewChild(MovieCartComponent) addCartRef?: MovieCartComponent;
  movieDetails : any[]=[
    {
    "movieId":101,
    "movieName":"Roohi",
    "productionName":"Jio Studio",
    "movieType":"Horror-Comedy",
    "director":"Hardik Mehta",
    "cast1":"Rajkumar Rao",
    "cast2":"Jahnvi Kapoor",
    "language":"Hindi",
    "poster":"/assets/images/roohi.jpg",
    },
    {
    "movieId":102,
    "movieName":"Mumbai Saga",
    "productionName":"T-Series",
    "movieType":"Action",
    "director":"Sanjay Gupta",
    "cast1":"John Abraham",
    "cast2":"Kajal Aggarwal",
    "language":"Hindi",
    "poster":"/assets/images/Mumbai-Saga-3.jpg",
    },
    {
    "movieId":201,
    "movieName":"Krack",
    "productionName":"Saraswathi Film Division",
    "movieType":"Action",
    "director":"Gopichand",
    "cast1":"Ravi Teja",
    "cast2":"Shruti Haasan",
    "language":"Telugu",
    "poster":"/assets/images/Krack.jpg",
    },
    {
    "movieId":202,
    "movieName":"Uppena",
    "productionName":"Mythiri Movie Makers",
    "movieType":"Romantic",
    "director":"Bucci Babu",
    "cast1":"Panja Vaishnav Tej",
    "cast2":"Kriti Shetty",
    "language":"Telugu",
    "poster":"/assets/images/Uppena1.jpg",
    }]
  ImageRoohiPath:any;
  ImageSagaPath:any;
  ImageUppenaPath:any;
  ImageKrackPath:any;
  showModal : boolean=false;
  Firstname : string="";
  Lastname  : string="";
  Email     : string="";
  movieName: string="";
  detail:any;
  movieModel:string="";
  showInfoModal:boolean=false;
  inputKrackVal:number=1;
  inputUppenaVal:number=1;
  inputSagaVal:number=1;
  inputRoohiVal:number=1;
  disableKrackBtn:boolean=false;
  disableSagaBtn:boolean=false;
  disableRoohiBtn:boolean=false;
  disableUppenaBtn:boolean=false;
  i_Krack:number=1;
  i_Saga:number=1;
  i_Uppena:number=1;
  i_Roohi:number=1;
  data:any;
  constructor() { 
    
    this.ImageRoohiPath = '/assets/images/roohi.jpg';
    this.ImageSagaPath = '/assets/images/Mumbai-Saga-3.jpg';
    this.ImageUppenaPath = '/assets/images/Uppena1.jpg';
    this.ImageKrackPath = '/assets/images/Krack.jpg';
  }
  ngOnInit(): void {
		
  }
 
  openModal(data:string)
  {
    this.showInfoModal = false;
    this.showModal = true;
    this.movieName = data;
    this.detail = this.movieDetails.filter(function (movie) {
      return movie.movieName === data;
    } );
  
  }
  hide()
  {
    this.showInfoModal = false;
    this.showModal = false;
  }
 
  increment(data:string){
    this.showInfoModal = false;
    if(data=='Krack'){
      this.i_Krack++;
      this.inputKrackVal = this.inputKrackVal+1;
      this.disableKrackBtn = false;
    }else if(data=='Saga'){
      this.i_Saga++;
      this.inputSagaVal = this.inputSagaVal+1;
      this.disableSagaBtn = false;
    }else if(data=='Roohi'){
      this.i_Roohi++;
      this.inputRoohiVal = this.inputRoohiVal+1;
      this.disableRoohiBtn = false;

    }else if(data=='Uppena'){
      this.i_Uppena++;
      this.inputUppenaVal = this.inputUppenaVal+1;
      this.disableUppenaBtn = false;
    }
   
  }

  decrement(data:string){
    this.showInfoModal = false;
    if(data=='Krack'){
    this.i_Krack--;
    this.inputKrackVal = this.inputKrackVal-1;
    if(this.i_Krack == 0){
      this.disableKrackBtn = true;
    }
  }else if(data=='Saga'){
    this.i_Saga--;
    this.inputSagaVal = this.inputSagaVal-1;
    if(this.i_Saga == 0){
      this.disableSagaBtn = true;
    }
  }else if(data=='Roohi'){
    this.i_Roohi--;
    this.inputRoohiVal = this.inputRoohiVal-1;
    if(this.i_Roohi == 0){
      this.disableRoohiBtn = true;
    }
  }else if(data=='Uppena'){
    this.i_Uppena--;
    this.inputUppenaVal = this.inputUppenaVal-1;
    if(this.i_Uppena == 0){
      this.disableUppenaBtn = true;
    }
  }
  }

  addCart(data:string) {
    this.showInfoModal = true;
    if(this.addCartRef){
      this.data = this.movieDetails.filter(function (movie) {
        return movie.movieName === data;
      });
      if(data=='Roohi'){
        this.data["quantity"] = this.inputRoohiVal;
      }else if(data=='Uppena'){
        this.data["quantity"] = this.inputUppenaVal;
      }else if(data=='Saga'){
        this.data["quantity"] = this.inputSagaVal;
      }else if(data=='Krack'){
        this.data["quantity"] = this.inputKrackVal;
      }
     // this.addCartRef.addToCart(this.data);
    }
   
  }

  hideAlert(){
    this.showInfoModal = false;
  }
}
