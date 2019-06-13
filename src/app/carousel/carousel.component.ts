import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  imageObject: Array<object> = [
    {
      image: "assets/images/thumb1.png",
      thumbImage: "assets/images/thumb1.png"
    },
    {
      image: "assets/images/thumb2.png",
      thumbImage: "assets/images/thumb2.png"
    },
    {
      image: "assets/images/thumb3.png",
      thumbImage: "assets/images/thumb3.png"
    }
  ]
  constructor() {}

  ngOnInit() {}
}
