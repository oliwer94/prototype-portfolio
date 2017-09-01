import { Component, OnInit } from '@angular/core';
import { GameService } from '../gameService/game-service.service';

@Component({
  selector: 'app-quadball',
  templateUrl: './quadball.component.html',
  styleUrls: ['./quadball.component.css']
})
export class QuadballComponent implements OnInit {

  //proto;
  constructor(private gameService: GameService) {
   // this.proto = this.gameService.gameObject;
  }

  ngOnInit() {
  }

  proto: any =
    {
      name: "QuadBall",
      about: `The exercise was to create a game that
full-fills the following requirements: 
     - Max 3 players per team
     - 10-minute rounds
     - Spactatable
     - Competitive
     - Have to use a prop (ball, bat etc...)`,
      imgsrc: "\\assets\\images\\quadball.png",
      pdf: "http://www.oliverarnits.com\\assets\\pdf\\Quadball.pdf",
      tag: "quadball"
    };

}
