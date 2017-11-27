import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorry-imbroke',
  templateUrl: './sorry-imbroke.component.html',
  styleUrls: ['./sorry-imbroke.component.css']
})
export class SorryImbrokeComponent implements OnInit {

  proto: any =
     {
       name: 'Sorry I\'m broke',
       about: `The exercise was to create a local multiplayer
       game that full-fills the following requirements:
      - 1 winner
      - in-game economy`,
       imgsrc: '\\assets\\images\\bill.png',
       pdf: 'http://www.oliverarnits.com\\assets\\pdf\\Sorry_Im_Broke_Rules.pdf',
       tag: 'sorryimbroke',
       build: '\\assets\\pdf\\Sorry_Im_Broke_Print_and_Play.pdf'
     };


   ngOnInit() {
  }
}
