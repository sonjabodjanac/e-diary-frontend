import { Component, OnInit, Input } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NastavnikService } from '../nastavnik.service';
import { NastavnikPredaje } from '../nastavnik-predaje';

@Component({
  selector: 'app-nastavnik-detalji',
  templateUrl: './nastavnik-detalji.component.html',
  styleUrls: ['./nastavnik-detalji.component.css']
})
export class NastavnikDetaljiComponent implements OnInit {
 nastavnik: Nastavnik;
 nastavnikPredaje: NastavnikPredaje;
 nastavniciPredaju: NastavnikPredaje[] = [];
 nastavnikId = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private nastavnikService: NastavnikService, private location: Location) { }

  ngOnInit() {
        this.getNastavnika();
  }

  getNastavnika(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nastavnikService.getNastavnik(id)
    .subscribe(nastavnik => this.nastavnik = nastavnik);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.nastavnikService.updateNastavnik(this.nastavnik)
     .subscribe(() => this.goBack());
 }

 addNastavnikPredaje(oznaka: string, naziv: string): void {
   this.nastavnikService.addNastavnikPredaje({ oznaka, naziv } as NastavnikPredaje, this.nastavnikId)
     .subscribe(nastavnikPredaje => {
       this.nastavniciPredaju.push(nastavnikPredaje);
     });
 }
}
