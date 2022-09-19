import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayComponent } from './play/play.component';
import { GamesComponent } from './games/games.component';
import { CurrentGameComponent } from './current-game/current-game.component';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, HomeComponent, AboutComponent, NotFoundComponent, PlayComponent, GamesComponent, CurrentGameComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
