import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-entry',
  templateUrl: './movie-entry.component.html',
  styleUrls: ['./movie-entry.component.css']
})
export class MovieEntryComponent implements OnInit {
  ImageRoohiPath:any;
  ImageSagaPath:any;
  ImageUppenaPath:any;
  ImageKrackPath:any;
  constructor() { 
    this.ImageRoohiPath = '/assets/images/roohi.jpg';
    this.ImageSagaPath = '/assets/images/Mumbai-Saga-3.jpg';
    this.ImageUppenaPath = '/assets/images/Uppena1.jpg';
    this.ImageKrackPath = '/assets/images/Krack.jpg';
  }

  ngOnInit(): void {
  }

}
