import { Injectable } from '@angular/core';
import { Field } from './Model/Model';

@Injectable({
  providedIn: 'root'
})
export class ChessboardService {

  constructor() { }

  generateFields(): Field[]
  {
    var fields: Field[] = new Array(64);

    for(var i = 0; i<64; i++)
    {
      if (Math.floor(i/8)%2 == 0){
        if (i%2 == 0){
          fields[i] = new Field(false);
        }
        else{
          fields[i] = new Field(true);
        }
      }
      else{
        if (i%2 == 0){
          fields[i] = new Field(true);
        }else
        {
          fields[i] = new Field(false);
        }
      }
    }

    return fields;
  }
}
