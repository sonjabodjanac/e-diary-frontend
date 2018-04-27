import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css']
})
export class NastavniciComponent implements OnInit {
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
          this.nastavnikService.addNastavnik({ ime, prezime, jmbg, datumRodjenja } as Nastavnik)
            .subscribe(nastavnik => {
              this.nastavnici.push(nastavnik);
            });
        }

        delete(nastavnik: Nastavnik): void {
           this.nastavnici = this.nastavnici.filter(n => n !== nastavnik);
           this.nastavnikService.deleteNastavnik(nastavnik).subscribe();
         }

}
