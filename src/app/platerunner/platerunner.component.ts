import { Component, OnInit } from '@angular/core';
import { GameService } from '../gameService/game-service.service';

@Component({
  selector: 'app-platerunner',
  templateUrl: './platerunner.component.html',
  styleUrls: ['./platerunner.component.css']
})
export class PlaterunnerComponent implements OnInit {

  proto: any =
  {
    name: 'Plate Runner',
    about: `The exercise was to create a game that
full-fills the following requirements:
   - 2 players
   - 2 min rounds or infinite
   - Spactate-able
   - Has to have a digital component`,
    imgsrc: '\\assets\\images\\platerunner.png',
    pdf: 'http://www.oliverarnits.com\\assets\\pdf\\Platerunner.pdf',
    tag: 'platerunner',
    build: '\\assets\\builds\\Build-20170910T161915Z-001.zip'
  };
  // proto;
  constructor(private gameService: GameService) {
   // this.proto = this.gameService.gameObject;
  }

  ngOnInit() {
  }
}
