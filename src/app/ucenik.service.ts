import { Injectable } from '@angular/core';
import { Ucenik } from './ucenik';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UcenikService {

  private uceniciUrl = 'http://localhost:8080/api/v1/persons/students';
  private searchUceniciUrl = 'http://localhost:8080/api/v1/persons/students/find-by-jmbg/';

  getUcenikeByNastavnikAndPredmet (nastavnikId: number, predmetId: number): Observable<Ucenik[]> {
  return this.http.get<Ucenik[]>(`${this.uceniciUrl}/teacher/${nastavnikId}/subject/${predmetId}`)
    .pipe(
      tap(ucenici => this.log(`Ucenici dobavljeni`)),
      catchError(this.handleError('getUcenikeByNastavnikAndPredmet', []))
    );
}

getUcenik(id: number): Observable<Ucenik> {
const url = `${this.uceniciUrl}/${id}`;
return this.http.get<Ucenik>(url).pipe(
  tap(_ => this.log(` Dobavljen ucenik pod id=${id}`)),
  catchError(this.handleError<Ucenik>(`getUcenik id=${id}`))
);
}

  getUcenikeByOdeljenje(odeljenjeId): Observable<Ucenik[]> {
  return this.http.get<Ucenik[]>(`${this.uceniciUrl}/classDepartmant/${odeljenjeId}`)
    .pipe(
      tap(ucenici => this.log(`Ucenici dobavljeni`)),
      catchError(this.handleError('getUcenike', []))
    );
}

getUcenike(): Observable<Ucenik[]> {
return this.http.get<Ucenik[]>(`${this.uceniciUrl}`)
  .pipe(
    tap(ucenici => this.log(`Ucenici dobavljeni`)),
    catchError(this.handleError('getUcenike', []))
  );
}

getUcenikeByRoditelj(roditeljId: number): Observable<Ucenik[]> {
return this.http.get<Ucenik[]>(`${this.uceniciUrl}/parent/${roditeljId}`)
  .pipe(
    tap(ucenici => this.log(`Ucenici dobavljeni`)),
    catchError(this.handleError('getUcenikeByRoditelj', []))
  );
}
  updateUcenik (ucenik: Ucenik): Observable<any> {
  return this.http.put(`${this.uceniciUrl}/${ucenik.id}`, ucenik, httpOptions).pipe(
    tap(_ => this.log(`Izmenjen Ucenik: id=${ucenik.id}`)),
    catchError(this.handleError<any>('updateUcenik'))
  );
}

addUcenik(ucenik: Ucenik): Observable<Ucenik> {
  return this.http.post<Ucenik>(`${this.uceniciUrl}`, ucenik, httpOptions).
  pipe(
    tap( ucen => this.log(`dodat Ucenik ${ucenik.ime} ${ucenik.prezime}`)),
    catchError(this.handleError<Ucenik>('addUcenik'))
  );
}

deleteUcenik (ucenik: Ucenik): Observable<Ucenik> {
  return this.http.delete<Ucenik>(`${this.uceniciUrl}/${ucenik.id}`, httpOptions).pipe(
    tap(_ => this.log(`obrisan Ucenik id=${ucenik.id}`)),
    catchError(this.handleError<Ucenik>('deleteUcenik'))
  );
}
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

  searchUcenike(term: string): Observable<Ucenik[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Ucenik[]>(`${this.searchUceniciUrl}?jmbg=${term}`).pipe(
      tap(_ => this.log(`pronadjeni ucenici koji odgovaraju "${term}"`)),
      catchError(this.handleError<Ucenik[]>('searchUcenike', []))
    );
  }






}
