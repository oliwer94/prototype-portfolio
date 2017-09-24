import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {GameService} from './gameService/game-service.service';

import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tile/tile.component';
import { SafePipe } from './sanitizerPipe/safe.pipe';
import { QuadballComponent } from './quadball/quadball.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { PlaterunnerComponent } from './platerunner/platerunner.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FroggerComponent } from './frogger/frogger.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    TileComponent,
    SafePipe,
    QuadballComponent,
    LandingpageComponent,
    AboutComponent,
    ComingsoonComponent,
    PlaterunnerComponent,
    FroggerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([      
      {
        path:'quadball',
        component:QuadballComponent
      },
      {
        path:'platerunner',
        component:PlaterunnerComponent
      },
      {
        path:'frogger',
        component:FroggerComponent
      },
      {
        path:'',
        component:LandingpageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'comingsoon',
        component:ComingsoonComponent
      }
    ])
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
