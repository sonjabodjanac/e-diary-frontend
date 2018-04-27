import { Component, OnInit } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ocena } from '../ocena';
import { OcenaService } from '../ocena.service';

@Component({
  selector: 'app-ucenik-predmet',
  templateUrl: './ucenik-predmet.component.html',
  styleUrls: ['./ucenik-predmet.component.css']
})
export class UcenikPredmetComponent implements OnInit {
    constructor(private route: ActivatedRoute, private location: Location, private ocenaService: OcenaService,
       private predmetService: PredmetService) { }
  ocene: Ocena[];
  ocena: Ocena;
  predmeti: Predmet[];
  selectedPredmet: Predmet;
  ucenikId = +this.route.snapshot.paramMap.get('id');

  getPredmeteByUcenik(): void {
    const ucenikId = +this.route.snapshot.paramMap.get('id');
    this.predmetService.getPredmeteByUcenik(ucenikId)
    .subscribe( predmeti => this.predmeti = predmeti);
  }
    ngOnInit() {
      this.getPredmeteByUcenik();
    }



}
