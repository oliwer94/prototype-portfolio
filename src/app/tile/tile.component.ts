import { Component, OnInit,Input } from '@angular/core';
import { GameService } from '../gameService/game-service.service';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() proto;  
    
    constructor(private gameService:GameService)
    {

    }

  click()
  {
    this.gameService.gameObject = this.proto;
  }

  ngOnInit() {
  }
}
