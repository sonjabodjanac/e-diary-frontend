import { Component, OnInit, Input } from '@angular/core';
import { Ocena } from '../ocena';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OcenaService } from '../ocena.service';

@Component({
  selector: 'app-ocena-izmena',
  templateUrl: './ocena-izmena.component.html',
  styleUrls: ['./ocena-izmena.component.css']
})
export class OcenaIzmenaComponent implements OnInit {
  ocena: Ocena;
  ocene: Ocena[];
  constructor(private route: ActivatedRoute, private ocenaService: OcenaService, private location: Location) { }

  ngOnInit() {
    this.getOcena();
  }

  getOcena(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.ocenaService.getOcena(id)
   .subscribe(ocena => this.ocena = ocena);
 }

 goBack(): void {
   this.location.back();
 }

 save(): void {
  this.ocenaService.updateOcena(this.ocena)
    .subscribe(() => this.goBack());
}

}
