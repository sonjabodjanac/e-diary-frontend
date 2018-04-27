import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { Predmet } from '../predmet';
import { OdeljenjeService } from '../odeljenje.service';
import { PredmetService } from '../predmet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnik-odeljenja',
  templateUrl: './nastavnik-odeljenja.component.html',
  styleUrls: ['./nastavnik-odeljenja.component.css']
})
export class NastavnikOdeljenjaComponent implements OnInit {

 odeljenja: Odeljenje[];
 selectedOdeljenje: Odeljenje;
 predmeti: Predmet[];
 nastavnikId: number;

  constructor(private odeljenjeService: OdeljenjeService, private predmetService: PredmetService,
  private route: ActivatedRoute, private location: Location ) { }

  ngOnInit() {
    this.getOdeljenjaByNastavnik();
  }

  onSelect(odeljenje: Odeljenje): void {
    this.selectedOdeljenje = odeljenje;
  }

  getOdeljenjaByNastavnik(): void {
    this.nastavnikId = +this.route.snapshot.paramMap.get('id');
    this.odeljenjeService.getOdeljenjaByNastavnik(this.nastavnikId).subscribe(odeljenja => this.odeljenja  = odeljenja);
  }

  getPredmeteByOdeljenjeAndNastavnik(): void {
    this.predmetService.getPredmeteByOdeljenjeAndNastavnik(this.nastavnikId, this.selectedOdeljenje.id)
    .subscribe(predmeti => this.predmeti = predmeti);
  }

  goBack(): void {
    this.location.back();
  }

}
