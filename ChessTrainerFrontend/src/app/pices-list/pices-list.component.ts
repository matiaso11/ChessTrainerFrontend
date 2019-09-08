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
  checkedField: number = 99;
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

  selectField(input: number) {
    
    if(this.checkedField != 99)
      this.fields[this.checkedField].isSelected = false;
    this.checkedField = input;
    this.fields[input].isSelected = true;
    
  }

  startTraining() {
    
  }

}
