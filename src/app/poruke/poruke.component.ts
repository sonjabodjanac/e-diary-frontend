import { Component, OnInit } from '@angular/core';
import { PorukeService } from '../poruke.service';

@Component({
  selector: 'app-poruke',
  templateUrl: './poruke.component.html',
  styleUrls: ['./poruke.component.css']
})
export class PorukeComponent implements OnInit {

  constructor(public porukeService: PorukeService) { }

  ngOnInit() {
  }

}
