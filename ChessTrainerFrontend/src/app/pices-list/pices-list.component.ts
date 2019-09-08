import { Component, OnInit } from '@angular/core';
import { PicesService } from '../pices.service';
import { ChessboardService } from '../chessboard.service';
import { Field } from '../Model/Model';

@Component({
  selector: 'app-pices-list',
  templateUrl: './pices-list.component.html',
  styleUrls: ['./pices-list.component.css']
})
export class PicesListComponent implements OnInit {

  fields: Field[] = new Array(64);
  chessmanSelected: string;
  chessPices;
  constructor(
    private picesService: PicesService,
    private chessboardService: ChessboardService
  ) 
  {
    this.fields = this.chessboardService.generateFields();
  }

  ngOnInit() {
    this.picesService.getItems().subscribe(ps => {
      this.chessPices = ps;
    });
  }

  startTraining() {

  }

}
