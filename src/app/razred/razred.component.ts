import { Component, OnInit } from '@angular/core';
import { Razred } from '../razred';
import { RazredService } from '../razred.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-razred',
  templateUrl: './razred.component.html',
  styleUrls: ['./razred.component.css']
})
export class RazredComponent implements OnInit {
  razred: Razred;
  razredi: Razred[] = [];

  constructor(private razredService: RazredService, private location: Location) { }

  ngOnInit() {
    this.getRazredi();
  }
  goBack(): void {
    this.location.back();
  }

 getRazredi(): void {
   this.razredService.getRazredi()
   .subscribe(razredi => this.razredi = razredi);
 }

 delete(razred: Razred): void {
    this.razredi = this.razredi.filter(r => r !== razred);
    this.razredService.deleteRazred(razred).subscribe();
  }

  add(brRazreda: number, skGodina: string): void {
    skGodina = skGodina.trim();
    if (!skGodina) {
       alert('Polje za skolsku godinu ne sme biti prazno!');
       return; }
    if (!brRazreda) {
       alert('Polje za razred ne sme biti prazno!');
       return; }
       if (brRazreda < 1 || brRazreda > 8) {
          alert('Razred ne postoji!');
          return; }
        if (skGodina !== (`${new Date().getFullYear()}/${new Date().getFullYear() + 1}`)) {
          alert('Neispravan unos,skolska godina ne odgovara trenutnoj!');
          return;
        }
    this.razredService.addRazred({ brRazreda, skGodina  } as Razred)
      .subscribe(razred => {
        this.razredi.push(razred);
      });
  }

}
