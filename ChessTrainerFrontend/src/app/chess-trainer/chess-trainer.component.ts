import { Component, OnInit } from '@angular/core';
import { ChessMoveRequest, ChessMoveResponse } from '../Model/Model';
import { PicesService } from '../pices.service';

@Component({
  selector: 'app-chess-trainer',
  templateUrl: './chess-trainer.component.html',
  styleUrls: ['./chess-trainer.component.css']
})
export class ChessTrainerComponent implements OnInit {

  contextRequest = new ChessMoveRequest();
  contextResponse = new ChessMoveResponse();
  startPoint: string;
  destinationPoint: string;

  constructor(
    private picesService: PicesService
  )   { }

  ngOnInit() {
  }

  checkIfCanMove() {
    this.picesService.checkIfCanMove(this.contextRequest).subscribe(ps => {
      this.contextResponse = ps;
      console.log(JSON.stringify(ps));
      if(!this.contextResponse.isAvailable)
      {
        alert(this.contextResponse.message)
      }
    });

    
  }

}
