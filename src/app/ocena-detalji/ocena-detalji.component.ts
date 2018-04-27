import { Component, OnInit, Input } from '@angular/core';
import { Ocena } from '../ocena';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OcenaService } from '../ocena.service';
import { Predmet } from '../predmet';

@Component({
  selector: 'app-ocena-detalji',
  templateUrl: './ocena-detalji.component.html',
  styleUrls: ['./ocena-detalji.component.css']
})
export class OcenaDetaljiComponent implements OnInit {
 ocena: Ocena;
 ocene: Ocena[];
predmet: Predmet;
selectedPredmet: Predmet;

  constructor(private route: ActivatedRoute,
     private ocenaService: OcenaService, private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  getOceneByUcenikAndPredmet(): void {
    const ucenikId = +this.route.snapshot.paramMap.get('id');
    const predmetId = this.selectedPredmet.id;
    this.ocenaService.getOceneByPredmetAndUcenik(ucenikId, predmetId).subscribe(ocene => this.ocene = ocene);
  }


}
