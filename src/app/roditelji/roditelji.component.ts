import { Component, OnInit } from '@angular/core';
import { Roditelj } from '../roditelj';
import { RoditeljService } from '../roditelj.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roditelji',
  templateUrl: './roditelji.component.html',
  styleUrls: ['./roditelji.component.css']
})
export class RoditeljiComponent implements OnInit {

    roditelji: Roditelj[] = [];
    roditelj: Roditelj;

  constructor(private roditeljService: RoditeljService, private location: Location) { }

  ngOnInit() {
    this.getRoditelje();
  }
  goBack(): void {
    this.location.back();
  }

  getRoditelje(): void {
    this.roditeljService.getRoditelje()
    .subscribe( roditelji => this.roditelji = roditelji);
  }

  add(ime: string, prezime: string, jmbg: string, datumRodjenja: Date): void {
    ime = ime.trim();
    prezime = prezime.trim();
    jmbg = jmbg.trim();
    if (!ime) {
      alert('Polje za ime ne sme biti prazno!');
      return; }
      if (!prezime) {
        alert('Polje za prezime ne sme biti prazno!');
        return; }
        if (!jmbg) {
          alert('Polje za jmbg ne sme biti prazno!');
          return; }
          if (jmbg.length !== 13 ) {
            alert('JMBG mora da sadrzi 13 cifara!');
            return;
          }
          if (!datumRodjenja) {
            alert('Polje za datum ne sme biti prazno');
            return;
          }
          if (!(/^(0[1-9]|1\d|2\d|3[01])\-(0[1-9]|1[0-2])\-(19|20)\d{2}$/.test(datumRodjenja.toString()))) {
            alert('Neispravan format datuma!');
            return;
          }
    this.roditeljService.addRoditelj({ ime, prezime, jmbg, datumRodjenja } as Roditelj)
      .subscribe(roditelj => {
        this.roditelji.push(roditelj);
      });
  }

  delete(roditelj: Roditelj): void {
     this.roditelji = this.roditelji.filter(r => r !== roditelj);
     this.roditeljService.deleteRoditelj(roditelj).subscribe();
   }


}
