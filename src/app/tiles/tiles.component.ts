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
      name: "QuadBall",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\quadball.png",
      pdf:"\\assets\\pdf\\Quadball.pdf",
      tag:"quadball"      
    },
    {
      name: "spectatable  game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"      
    },
    {
      name: "Modification of an already existing game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    },
    {
      name: "From emotion to game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    },
    {
      name: "Loops",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    },
    {
      name: "One button game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    },
    {
      name: "Vertical jumping game",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    },
    {
      name: " Local Multiplayer",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    },
    {
      name: "UI exercise",
      about: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgsrc: "\\assets\\images\\comingsoon.jpg",
      tag:"comingsoon"
    }];

  ngOnInit() {
  }
}
