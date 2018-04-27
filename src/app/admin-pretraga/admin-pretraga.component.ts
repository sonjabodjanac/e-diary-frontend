import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-pretraga',
  templateUrl: './admin-pretraga.component.html',
  styleUrls: ['./admin-pretraga.component.css']
})
export class AdminPretragaComponent implements OnInit {

  admini$: Observable<Admin[]>;
  private searchTerms = new Subject<string>();
  constructor(private adminService: AdminServiceService) { }

  search(term: string): void {
  this.searchTerms.next(term);
}

  ngOnInit() {
    this.admini$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.adminService.searchAdmin(term)),
    ); }

}
