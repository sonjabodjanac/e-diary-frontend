import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminServiceService {

  private adminiUrl = 'http://localhost:8080/api/v1/persons/admin';

  constructor(private porukeService: PorukeService, private http: HttpClient) { }


    private log(poruka: string) {
      this.porukeService.add('UcenikService' + poruka);
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.poruka}`);
        return of(result as T);
      };
    }

    searchAdmin(term: string): Observable<Admin[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Admin[]>(`${this.adminiUrl}/find-by-jmbg?jmbg=${term}`).pipe(
        tap(_ => this.log(`pronadjen admin`)),
        catchError(this.handleError<Admin[]>('searchAdmin', []))
      );
    }

}
