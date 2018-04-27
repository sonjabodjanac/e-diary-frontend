import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';
import { OcenaService } from '../ocena.service';
import { Ocena } from '../ocena';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ucenik-ocena',
  templateUrl: './ucenik-ocena.component.html',
  styleUrls: ['./ucenik-ocena.component.css']
})
export class UcenikOcenaComponent implements OnInit {
ocena: Ocena;
ocene: Ocena[];
ucenikId: number = +this.route.snapshot.paramMap.get('uId');
predmetId: number = +this.route.snapshot.paramMap.get('pId');



  constructor(private ocenaService: OcenaService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getOceneByPredmetAndUcenik();
  }

  getOceneByPredmetAndUcenik(): void {
    this.ocenaService.getOceneByPredmetAndUcenik(this.predmetId, this.ucenikId).
    subscribe(ocene => this.ocene = ocene);
  }


}
