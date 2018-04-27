import { Injectable } from '@angular/core';

@Injectable()
export class PorukeService {

  poruke:string[] = [];

  add(poruka:string){
    this.poruke.push(poruka);
  }

  clear() {
    this.poruke = [];
  }

  constructor() { }

}
