import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panda-protect',
  templateUrl: './panda-protect.component.html',
  styleUrls: ['./panda-protect.component.css']
})

export class PandaProtectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proto: any =
  {
    name: "Panda Protect",
    about: 
`The exercise was to pick an emotion and
try to turn it into a game. We have picked sympathy.
The player has to carry the injured panda to
the hospital, before it bleeds out or get
shot by the poachers again.
The  requirements: 
     - 2 players game
     - no playtime constraint
     - using at least ONE console controller
     - no music (but yes to SFX)`,
     controller:
     `Controls:
         
         Controller (SNES USB):
         Red Ninja  up: D-PAD Up 
                    left: D-PAD Left 
                    right: D-PAD right 
         Blue Ninja down: B
                    left: Y 
                    right: A 
`,
keyboard:`
Keyboard:    
Red Ninja  up: W 
           left: A 
           right: D 
Blue Ninja down: Down arrow
           left: Left arrow
           right: Righ arrow
            `,
    imgsrc: "\\assets\\images\\panda-protect.png",
    pdf: "http://www.oliverarnits.com\\assets\\pdf\\Panda-protect.pdf",
    tag: "panda-protect",
    build:"\\assets\\builds\\panda protect.zip",
    webglURL:"\\panda-protect\\game",
    largeImage:"\\assets\\images\\pp_large.png"
  };


}
