import { Component, OnInit, Input} from '@angular/core';
import { Ocena } from '../ocena';
import { OcenaService } from '../ocena.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TipOcene } from '../tipOcene';


@Component({
  selector: 'app-nastavnik-ocena',
  templateUrl: './nastavnik-ocena.component.html',
  styleUrls: ['./nastavnik-ocena.component.css']
})
export class NastavnikOcenaComponent implements OnInit {

ocene: Ocena[] = [];
ocena: Ocena;
nastavnikId = +this.route.snapshot.paramMap.get('nId');
predmetId = +this.route.snapshot.paramMap.get('pId');
ucenikId = +this.route.snapshot.paramMap.get('uId');
  constructor(private route: ActivatedRoute, private ocenaService: OcenaService) { }

  ngOnInit() {
    this.getOceneByPredmetAndUcenik();
  }

  getOceneByPredmetAndUcenik(): void {
    this.ocenaService.getOceneByPredmetAndUcenik(this.predmetId, this.ucenikId).
    subscribe(ocene => this.ocene = ocene);
  }

  addOcena(tipOcene, vrednost: number, polugodiste: number): void {
    if (!tipOcene) {
      alert('Tip ocene mora biti unet!');
      return; }
      if (tipOcene < 0 || tipOcene > 3) {
        alert('Tip ocene mora biti u opsegu od 0-3!');
        return; }
    if (!vrednost) {
      alert('Vrednost ocene mora biti uneta!');
      return; }
    if (vrednost < 1 || vrednost > 5) {
        alert('Vrednost ocene mora biti izmedju 1-5!');
        return;  }
        if (!polugodiste) {
          alert('Unesi polugodiste!');
          return; }
          if (polugodiste < 1 || polugodiste > 2) {
            alert('Polugodiste moze imati vrednosti 1 ili 2!');
            return; }
    this.ocenaService.addOcena({tipOcene, vrednost , polugodiste} as Ocena, this.nastavnikId, this.predmetId, this.ucenikId).
    subscribe(ocena => { this.ocene.push(ocena);
    });
  }

  addOcenaPrvoPolugodiste(vrednost): void {
    if (!vrednost) {
      alert('Unesi vrednost za ocenu!');
      return; }
      if (vrednost < 1 || vrednost > 5) {
          alert('Vrednost ocene mora biti izmedju 1-5!');
          return;  }
  this.ocenaService.addOcenaPrvoPolugodiste({vrednost} as Ocena, this.nastavnikId, this.predmetId, this.ucenikId).
    subscribe(ocena => { this.ocene.push(ocena);
      });
  }

  addOcenaDrugoPolugodiste(vrednost): void {
    if (!vrednost) {
      alert('Unesi vrednost za ocenu!');
      return; }
      if (vrednost < 1 || vrednost > 5) {
          alert('Vrednost ocene mora biti izmedju 1-5!');
          return;  }
  this.ocenaService.addOcenaDrugoPolugodiste({ vrednost } as Ocena, this.nastavnikId,
  this.predmetId, this.ucenikId).
    subscribe(ocena => { this.ocene.push(ocena);
      });
  }

  deleteOcena(ocena: Ocena): void {
    this.ocene = this.ocene.filter(o => o !== ocena);
    this.ocenaService.deleteOcena(ocena).subscribe();
  }
}
