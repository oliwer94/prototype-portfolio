import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oni',
  templateUrl: './oni.component.html',
  styleUrls: ['./oni.component.css']
})
export class OniComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proto: any =
  {
    name: "Oni - The Überlord",
    about: 
`The exercise was to create a prototype
using as many loops as possible. We
ended up creating a tamagitchi like
game combined with the 7 deadly sin where each sin is a mini-game.
Our target platform was Android, so the APK version.
While we managed to create a windows version the graphics looks 
terrible :c.
The  requirements: 
     - loops
     - Single player, competitive
     - Prototype each loop separately     
     - Many prototypes that together should make a game`, 
    tag: "oni",
    build:"\\assets\\builds\\Oni-The-Überlord.zip",
    webglURL:"\\assets\\builds\\oni.apk",
    largeImage:"\\assets\\images\\oni.png"
  };


}
