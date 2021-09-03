import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image: string = "assets/mobile-our-product.png";
  why: string = "assets/why_choose_us.png";
  attendance: string = "assets/attendance.png";
  digitized: string = "assets/digitized.png";
  liveclass: string = "assets/live_class.png";
  money: string = "assets/money_matters.png";
  safe: string = "assets/secure_safe.png";
  test: string = "assets/test.png";
  contact: string = "assets/contact_us.png";

}
