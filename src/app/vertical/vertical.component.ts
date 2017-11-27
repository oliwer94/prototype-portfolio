import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proto: any =
  {
    name: "Color Run ",
    about:
`The exercise was to create a vertical 
jumping game....
The  requirements: 
     - no playtime constraint
     - jump SFX`,
    imgsrc: "\\assets\\images\\colorrun.png",
    tag: "color-run",
    build: "\\assets\\builds\\color-run.zip",
    webglURL: "\\color-run\\game",
    largeImage: "\\assets\\images\\colorrun.png"
  };
}
