import { Component, OnInit, Input} from '@angular/core';
import { Ocena } from '../ocena';
import { OcenaService } from '../ocena.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TipOcene } from '../tipOcene';

@Component({
  selector: 'app-admin-ocena',
  templateUrl: './admin-ocena.component.html',
  styleUrls: ['./admin-ocena.component.css']
})
export class AdminOcenaComponent implements OnInit {

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

    deleteOcena(ocena: Ocena): void {
      this.ocene = this.ocene.filter(o => o !== ocena);
      this.ocenaService.deleteOcena(ocena).subscribe();
    }

}
