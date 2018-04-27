import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Razred } from '../razred';

@Component({
  selector: 'app-odeljenja',
  templateUrl: './odeljenja.component.html',
  styleUrls: ['./odeljenja.component.css']
})
export class OdeljenjaComponent implements OnInit {

    odeljenja: Odeljenje[] = [];
    odeljenje: Odeljenje;
    razred: Razred;
    razredi: Razred[];

  constructor(private odeljenjeService: OdeljenjeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getOdeljenja();
  }

  getOdeljenja(): void {
    this.odeljenjeService.getOdeljenja()
    .subscribe(odeljenja => this.odeljenja  = odeljenja);
  }

  delete(odeljenje: Odeljenje): void {
     this.odeljenja = this.odeljenja.filter(o => o !== odeljenje);
     this.odeljenjeService.deleteOdeljenje(odeljenje).subscribe();
   }

   addOdeljenje(oznaka: string, brRazreda: number): void {
     oznaka = oznaka.trim();
     if (!oznaka) {
       alert('Polje za odeljenje ne sme biti prazno!');
       return; }
       if (!(/([1-8])([a-z])/.test(oznaka))) {
         alert('Neispravan format oznake! Prvi karakter mora sadzati brojeve od 1-8,a drugi mala slova od a-s');
           return;
         }
     if (!brRazreda) {
        alert('Polje za razred ne sme biti prazno!');
        return; }
        if (brRazreda < 1 || brRazreda > 8) {
           alert('Razred ne postoji!');
           return; }
           if (+oznaka.substr(0, 1) !== +brRazreda) {
             alert('Nedozvoljen unos! Ovo odeljenje ne moze da pripada tom razredu.');
             return;
           }
     this.odeljenjeService.addOdeljenje({oznaka, brRazreda} as Odeljenje).
     subscribe(odeljenje => { this.odeljenja.push(odeljenje);
     });
   }

   goBack(): void {
     this.location.back();
   }


}
