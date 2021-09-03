import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'project1';

  constructor() {
    console.log("Component is Constructed");
  }

  public callme() : void {
    console.log("This is a function");

  }

  ngOnInit() {
    console.log("Component is initialized");
    this.callme();
  }

  myimage: string = "assets/1551869445010.png" ;



}
