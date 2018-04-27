import { Component, OnInit, Input } from '@angular/core';
import { UcenikService } from '../ucenik.service';
import { Ucenik } from '../ucenik';
import { Odeljenje } from '../odeljenje';
import { Roditelj } from '../roditelj';

@Component({
  selector: 'app-ucenik-dodavanje',
  templateUrl: './ucenik-dodavanje.component.html',
  styleUrls: ['./ucenik-dodavanje.component.css']
})
export class UcenikDodavanjeComponent implements OnInit {

  ucenik: Ucenik;
  ucenici: Ucenik[] = [];
  odeljenje: Odeljenje;
  roditelj: Roditelj;

  constructor(private ucenikService: UcenikService) { }

  ngOnInit() {
  }

  addUcenik(ime: string, prezime: string, jmbg: string, datumRodjenja: Date, oznaka: string, rIme: string, rPrezime: string): void {
    ime = ime.trim();
    prezime = prezime.trim();
    jmbg = jmbg.trim();
    oznaka = oznaka.trim();
    rIme = rIme.trim();
    rPrezime = rPrezime.trim();
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
          if (!oznaka) {
            alert('Polje za odeljenje ne sme biti prazno!');
            return; }
            if (!rIme) {
              alert('Polje za ime roditelja ne sme biti prazno!');
              return; }
              if (!rPrezime) {
                alert('Polje za prezime roditelja ne sme biti prazno!');
                return; }

    this.ucenikService.addUcenik({ ime, prezime, jmbg, datumRodjenja, oznaka, rIme, rPrezime } as Ucenik)
      .subscribe(ucenik => {
        this.ucenici.push(ucenik);
      });
  }

}
