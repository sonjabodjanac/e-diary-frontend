import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PredmetService } from '../predmet.service';


@Component({
  selector: 'app-predmet-detalji',
  templateUrl: './predmet-detalji.component.html',
  styleUrls: ['./predmet-detalji.component.css']
})
export class PredmetDetaljiComponent implements OnInit {
  predmet: Predmet;
  predmeti: Predmet[];
  constructor(private route: ActivatedRoute,
     private predmetService: PredmetService, private location: Location) { }

  ngOnInit() {
    this.getPredmet();
  }

    getPredmet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.predmetService.getPredmet(id)
     .subscribe(predmet => this.predmet = predmet);
   }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.predmetService.updatePredmet(this.predmet)
     .subscribe(() => this.goBack());
 }


}
