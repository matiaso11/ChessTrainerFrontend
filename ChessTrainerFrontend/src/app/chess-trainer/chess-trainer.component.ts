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
    
    for(var i = 0; i<64; i++)
    {
      if (Math.floor(i/8)%2 == 0){
        if (i%2 == 0){
          this.fields[i] = new Field(false);
        }
        else{
          this.fields[i] = new Field(true);
        }
      }
      else{
        if (i%2 == 0){
          this.fields[i] = new Field(true);
        }else
        {
          this.fields[i] = new Field(false);
        }
      }
    }

    this.fields[30].hasChessman = true;

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

}
