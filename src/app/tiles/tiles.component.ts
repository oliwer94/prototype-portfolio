import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  prototypes: any = [
    {
      name: "Sport",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "Spectable game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "Existing game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "emotion to game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "Loops",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "One button game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "V. jumping game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: " Local Multiplayer",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    },
    {
      name: "UI exercise",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\assets\images\comingsoon.jpg"
    }];

  ngOnInit() {
  }
}
