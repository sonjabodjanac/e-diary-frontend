import { Component, OnInit } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {
  predmeti: Predmet[] = [];
  selectedPredmet: Predmet;


  constructor(private predmetService: PredmetService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getPredmete();
  }
  goBack(): void {
    this.location.back();
  }

  onSelect(predmet: Predmet): void {
    this.selectedPredmet = predmet;
  }

  getPredmete(): void {
    this.predmetService.getPredmete()
    .subscribe( predmeti => this.predmeti = predmeti);
  }


  getPredmeteByOdeljenje(): void {
  const odeljenjeId = +this.route.snapshot.paramMap.get('id');
    this.predmetService.getPredmeteByOdeljenje(odeljenjeId)
    .subscribe( predmeti => this.predmeti = predmeti);
  }

  addPredmet(naziv: string, fond: number): void {
    naziv = naziv.trim();
    if (!naziv) {
    alert('Polje za naziv predmeta ne sme biti prazno!');
    return; }
    if (!fond) {
      alert('Polje za fond casova ne sme biti prazno!');
      return; }
    this.predmetService.addPredmet({naziv, fond} as Predmet).
    subscribe(predmet => { this.predmeti.push(predmet);
    });
  }

 delete(predmet: Predmet): void {
    this.predmeti = this.predmeti.filter(p => p !== predmet);
    this.predmetService.deletePredmet(predmet).subscribe();
  }


}
