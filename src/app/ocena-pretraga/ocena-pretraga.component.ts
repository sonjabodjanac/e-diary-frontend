import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';

@Component({
  selector: 'app-ocena-pretraga',
  templateUrl: './ocena-pretraga.component.html',
  styleUrls: ['./ocena-pretraga.component.css']
})
export class OcenaPretragaComponent implements OnInit {

  nastavnici$: Observable<Nastavnik[]>;
  private searchTerms = new Subject<string>();
  constructor(private nastavnikService: NastavnikService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.nastavnici$ = this.searchTerms.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((term: string) => this.nastavnikService.searchNastavnikeOcena(term)),
);
}
  }
