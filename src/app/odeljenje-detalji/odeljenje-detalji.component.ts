import { Component, OnInit, Input } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OdeljenjeService } from '../odeljenje.service';


@Component({
  selector: 'app-odeljenje-detalji',
  templateUrl: './odeljenje-detalji.component.html',
  styleUrls: ['./odeljenje-detalji.component.css']
})
export class OdeljenjeDetaljiComponent implements OnInit {
 odeljenje: Odeljenje;
  constructor(private route: ActivatedRoute, private odeljenjeService: OdeljenjeService, private location: Location) { }

  ngOnInit() {
this.getOdeljenje();
  }

  getOdeljenje(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.odeljenjeService.getOdeljenje(id)
    .subscribe(odeljenje => this.odeljenje = odeljenje);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.odeljenjeService.updateOdeljenje(this.odeljenje)
     .subscribe(() => this.goBack());
 }
}
