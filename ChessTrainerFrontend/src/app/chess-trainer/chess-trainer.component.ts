import { Component, OnInit } from '@angular/core';
import { ChessMoveRequest, ChessMoveResponse, Field } from '../Model/Model';
import { PicesService } from '../pices.service';
import { ActivatedRoute } from '@angular/router';
import { ChessboardService } from '../chessboard.service';

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
  ChessmanPosition: number;
  
  

  constructor(
    private picesService: PicesService,
    private route: ActivatedRoute,
    private chessboardService: ChessboardService
  )   
  {
    
    this.fields = this.chessboardService.generateFields();

    this.fields[30].hasChessman = true;
    this.ChessmanPosition = 30;

  }

  ngOnInit() {

    this.contextRequest.ChessPice = this.route.snapshot.paramMap.get("chessPice");
    this.ChessmanImage = 'assets/images/'+this.contextRequest.ChessPice + '.png';
    
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

  checkIfCanMovePost(index: number) {

    var start:string = this.numberToStringChessBoardConverter(this.ChessmanPosition);
    var destination:string = this.numberToStringChessBoardConverter(index);
    var req = new ChessMoveRequest();
    req.ChessPice = this.contextRequest.ChessPice;
    req.StartPosition = start;
    req.DestinationPosition = destination;
    this.picesService.checkIfCanMove(req).subscribe(ps => {
      this.contextResponse = ps;
      console.log(JSON.stringify(ps));
      if(!this.contextResponse.isAvailable)
      {
        alert(this.contextResponse.message)
      }
      else{
        this.moveChessman(index);
      }
    });
  }

  moveChessman(destiantion){
    this.fields[this.ChessmanPosition].hasChessman = false;
    this.fields[destiantion].hasChessman = true;
    this.ChessmanPosition = destiantion;
  }

  numberToStringChessBoardConverter(index: number): string{

    var col: number = index%8 + 1;
    var row: number = index/8;
    var colStr = String.fromCharCode(96 + col);
    var rowStr = String.fromCharCode(48 + row);

    return rowStr.concat(colStr);
  }
  stringToNumberChessBoardConverter(input: string): number{

    var col: number = input.charCodeAt(1) - 97;
    var row: number = input.charCodeAt(0) - 49;

    return col + row*8;
  }

}
