import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.component.html',
  styleUrls: ['./rhythm.component.css']
})
export class RhythmComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
    }
  
    proto: any =
    {
      name: "Rhythm",
      about: 
  `The exercise was to create a prototype
   where the player can only use one button to play the game.
   Our game is about navigating a duck through the map, collecting
   as many coins as possible, using only the spacebar to change direction.
   The  requirements: 
       - One button control.
       - Minimum 5 minutes gameplay.`, 
      tag: "rhythm",
      build:"\\assets\\builds\\Rhythm-windows.zip",
      webglURL:"\\rhythm\\game",
      largeImage:"\\assets\\images\\rhythm.png"
    };
  
}
