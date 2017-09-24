import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frogger',
  templateUrl: './frogger.component.html',
  styleUrls: ['./frogger.component.css']
})
export class FroggerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proto: any =
  {
    name: "Frogger",
    about: 
`The exercise was to modify and already
existing game. We have decided to implement
the time mechaninc from Super Hot into Frogger.
So the cars have a slow movement but when the
frog moves they speed up too. To try to make 
the game more playable, we have decided that
horizontal movement is allowed without it affecting
the speed of the cars.  `,
    imgsrc: "\\assets\\images\\frogger.png",
    pdf: "http://www.oliverarnits.com\\assets\\pdf\\Frogger.pdf",
    tag: "frogger",
    build:"\\assets\\builds\\frogger prototype_V1.2.zip"
  };


}
