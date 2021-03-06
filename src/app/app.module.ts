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
import { PandaProtectComponent } from './panda-protect/panda-protect.component';
import { OniComponent } from './oni/oni.component';
import { RhythmComponent } from './rhythm/rhythm.component';
import { VerticalComponent } from './vertical/vertical.component';
import { SorryImbrokeComponent } from './sorry-imbroke/sorry-imbroke.component';

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
    FroggerComponent,
    PandaProtectComponent,
    OniComponent,
    RhythmComponent,
    VerticalComponent,
    SorryImbrokeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'quadball',
        component: QuadballComponent
      },
      {
        path: 'platerunner',
        component: PlaterunnerComponent
      },
      {
        path: 'oni',
        component: OniComponent
      },
      {
        path: 'frogger',
        component: FroggerComponent
      },
      {
        path: 'panda-protect',
        component: PandaProtectComponent
      },
      {
        path: 'rhythm',
        component: RhythmComponent
      },
      {
        path: 'color-run',
        component: VerticalComponent
      },
      {
        path: '',
        component: LandingpageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'sorryimbroke',
        component: SorryImbrokeComponent
      }
    ])
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
