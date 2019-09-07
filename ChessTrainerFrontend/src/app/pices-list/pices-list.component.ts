import { Component, OnInit } from '@angular/core';
import { PicesService } from '../pices.service';

@Component({
  selector: 'app-pices-list',
  templateUrl: './pices-list.component.html',
  styleUrls: ['./pices-list.component.css']
})
export class PicesListComponent implements OnInit {

  chessPices;
  constructor(
    private picesService: PicesService
  ) { }

  ngOnInit() {
    this.picesService.getItems().subscribe(ps => {
      this.chessPices = ps;
      console.log(JSON.stringify(ps));
    });
  }

}
