import { Component, OnInit } from '@angular/core';
import { Ocena } from '../ocena';
import { OcenaService } from '../ocena.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-predmet-ocene',
  templateUrl: './predmet-ocene.component.html',
  styleUrls: ['./predmet-ocene.component.css']
})
export class PredmetOceneComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private ocenaService: OcenaService) { }
 ocene: Ocena[];
 ocena: Ocena;

 predmetId = +this.route.snapshot.paramMap.get('pId');
 ucenikId = +this.route.snapshot.paramMap.get('uId');

  ngOnInit() {
    this.getOceneByPredmetAndUcenik();
  }
  getOceneByPredmetAndUcenik(): void {
    this.ocenaService.getOceneByPredmetAndUcenik(this.predmetId, this.ucenikId).
    subscribe(ocene => this.ocene = ocene);
  }


}
