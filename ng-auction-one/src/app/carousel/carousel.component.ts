import { Component, OnInit } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
}
