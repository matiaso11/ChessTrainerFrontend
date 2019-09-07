import { Component, OnInit } from '@angular/core';
import { ChessMoveRequest, ChessMoveResponse, Field } from '../Model/Model';
import { PicesService } from '../pices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chess-trainer',
  templateUrl: './chess-trainer.component.html',
  styleUrls: ['./chess-trainer.component.css']
})
export class ChessTrainerComponent implements OnInit {

  contextRequest = new ChessMoveRequest();
  contextResponse = new ChessMoveResponse();
  fields: Field[] = new Array(64);
  ChessmanImage :string;
  
  

  constructor(
    private picesService: PicesService,
    private route: ActivatedRoute
  )   
  {
    this.ChessmanImage = '/images/'+this.contextRequest + '.png';
    this.fields[30] = new Field(true);
  }

  ngOnInit() {

    this.contextRequest.ChessPice = this.route.snapshot.paramMap.get("chessPice");
    
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
