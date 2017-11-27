import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  prototypes: any = [
    {
      name: 'QuadBall',
      imgsrc: '\\assets\\images\\quadball.png',
      pdf: '\\assets\\pdf\\Quadball.pdf',
      tag: 'quadball'
    },
    {
      name: 'Plate Runner',
      imgsrc: '\\assets\\images\\platerunner.png',
      pdf: '\\assets\\pdf\\Platerunner.pdf',
      build: '\\assets\\builds\\Build-20170910T161915Z-001.zip',
      tag: 'platerunner'
    },
    {
      name: 'Frogger',
      imgsrc: '\\assets\\images\\frogger.png',
      tag: 'frogger'
    },
    {
      name: 'Panda-Protect',
      imgsrc: '\\assets\\images\\pp_large.png',
      tag: 'panda-protect'
    },
    {
      name: 'Oni',
      imgsrc: '\\assets\\images\\oni.png',
      tag: 'oni'
    },
    {
      name: 'Rhythm',
      imgsrc: '\\assets\\images\\rhythm.png',
      tag: 'rhythm'
    },
    {
      name: 'Color Run',
      imgsrc: '\\assets\\images\\colorrun.png',
      tag: 'color-run'
    },
    {
      name: 'Sorry I\'m broke',
      imgsrc: '\\assets\\images\\bill.png',
      tag: 'sorryimbroke'
    }
  ];

  ngOnInit() {
  }
}
