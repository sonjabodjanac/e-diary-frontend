import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnik-predaje',
  templateUrl: './nastavnik-predaje.component.html',
  styleUrls: ['./nastavnik-predaje.component.css']
})
export class NastavnikPredajeComponent implements OnInit {

  nastavnici: Nastavnik[] = [];


  constructor(private nastavnikService: NastavnikService, private location: Location) { }


  ngOnInit() {
    this.getNastavnike();
  }
  goBack(): void {
    this.location.back();
  }

  getNastavnike(): void {
  this.nastavnikService.getNastavnike()
  .subscribe( nastavnici => this.nastavnici = nastavnici);
        }

}
