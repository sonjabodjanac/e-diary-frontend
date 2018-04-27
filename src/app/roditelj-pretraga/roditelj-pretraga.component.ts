import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Roditelj } from '../roditelj';
import { RoditeljService } from '../roditelj.service';

@Component({
  selector: 'app-roditelj-pretraga',
  templateUrl: './roditelj-pretraga.component.html',
  styleUrls: ['./roditelj-pretraga.component.css']
})
export class RoditeljPretragaComponent implements OnInit {

  roditelji$: Observable<Roditelj[]>;
 private searchTerms = new Subject<string>();

  search(term: string): void {
  this.searchTerms.next(term);
}

  constructor(private roditeljService: RoditeljService) { }

  ngOnInit() {
    this.roditelji$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.roditeljService.searchRoditelj(term)),
    );
  }

}
