import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-admin-ocena-ucenik',
  templateUrl: './admin-ocena-ucenik.component.html',
  styleUrls: ['./admin-ocena-ucenik.component.css']
})
export class AdminOcenaUcenikComponent implements OnInit {
  ucenici: Ucenik[];
  nastavnikId = +this.route.snapshot.paramMap.get('nId');
  predmetId = +this.route.snapshot.paramMap.get('pId');

    constructor(private route: ActivatedRoute, private ucenikService: UcenikService) { }

    ngOnInit() {
      this.getUcenikeByNastavnikAndPredmet();
    }

  getUcenikeByNastavnikAndPredmet(): void {
    this.ucenikService.getUcenikeByNastavnikAndPredmet(this.nastavnikId, this.predmetId).
    subscribe(ucenici => this.ucenici = ucenici);
  }
}
