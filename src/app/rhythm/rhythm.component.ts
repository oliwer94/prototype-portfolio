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
  using where the player only allowed to use only one button.
  The  requirements: 
       - Minimum 5 minutes gameplay.`, 
      tag: "rhythm",
      build:"\\assets\\builds\\Rhythm-windows.zip",
      webglURL:"\\rhythm\\game",
      largeImage:"\\assets\\images\\rhythm.png"
    };
  
}
