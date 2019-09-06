import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicesListComponent } from './pices-list/pices-list.component';
import { ChessTrainerComponent } from './chess-trainer/chess-trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PicesListComponent,
    ChessTrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
