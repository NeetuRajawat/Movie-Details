import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login-auth';
  showHead: boolean = false;
   constructor(private router : Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        }else if (event['url'] == '/invalid') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
   }
  ngOnInit(){
    
  }
}
