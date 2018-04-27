import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { Predmet } from '../predmet';
import { OdeljenjeService } from '../odeljenje.service';
import { PredmetService } from '../predmet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NastavnikService } from '../nastavnik.service';
import { NastavnikPredaje } from '../nastavnik-predaje';


@Component({
  selector: 'app-nastavnik-predaje-detalj',
  templateUrl: './nastavnik-predaje-detalj.component.html',
  styleUrls: ['./nastavnik-predaje-detalj.component.css']
})
export class NastavnikPredajeDetaljComponent implements OnInit {

  odeljenja: Odeljenje[] = [];
  selectedOdeljenje: Odeljenje;
  predmeti: Predmet[] = [];
  nastavnikId: number;
  nastavniciPredaju: NastavnikPredaje[] = [];

    constructor(private odeljenjeService: OdeljenjeService, private nastavnikService: NastavnikService,
       private predmetService: PredmetService, private route: ActivatedRoute, private location: Location ) { }

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

    addNastavnikPredaje(oznaka: string, naziv: string): void {
      oznaka = oznaka.trim();
      naziv = naziv.trim();
      if (!oznaka) {
        alert('Unesi odeljenje');
        return;
      }
      if (!naziv) {
        alert('Unesi predmet');
        return;
      }
      this.nastavnikService.addNastavnikPredaje({ oznaka, naziv } as NastavnikPredaje, this.nastavnikId)
        .subscribe(nastavnikPredaje => {
          this.nastavniciPredaju.push(nastavnikPredaje);
        });
    }

    goBack(): void {
      this.location.back();
    }


}
