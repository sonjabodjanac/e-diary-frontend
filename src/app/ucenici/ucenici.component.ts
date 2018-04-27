import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ucenici',
  templateUrl: './ucenici.component.html',
  styleUrls: ['./ucenici.component.css']
})
export class UceniciComponent implements OnInit {

 ucenici: Ucenik[];
  constructor(private ucenikService: UcenikService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getUcenike();
  }
          getUcenike(): void {
           this.ucenikService.getUcenike()
           .subscribe( ucenici => this.ucenici = ucenici);
          }

          delete(ucenik: Ucenik): void {
            this.ucenici = this.ucenici.filter(u => u !== ucenik);
            this.ucenikService.deleteUcenik(ucenik).subscribe();
          }

          goBack(): void {
            this.location.back();
          }




}
