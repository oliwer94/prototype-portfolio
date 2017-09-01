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
      about: `The exercise was to create a game that full-fills the following requirements: 
      \n -  Max 3 players / team
      \n - Spactable
      \n - Competitive
      \n - Have to use a prop (ball, bat etc...)
      `,
      imgsrc: "\\assets\\images\\quadball.png",
      pdf: "\\assets\\pdf\\Quadball.pdf",
      tag: "quadball"
    };

}
