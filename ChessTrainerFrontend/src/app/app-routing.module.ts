import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicesListComponent } from './pices-list/pices-list.component';
import { ChessTrainerComponent } from './chess-trainer/chess-trainer.component';


const routes: Routes = [
  { path: '', component: PicesListComponent },
  { path: 'chesstrainer/:chessPice', component: ChessTrainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
