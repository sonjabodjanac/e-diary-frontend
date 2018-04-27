import { Injectable } from '@angular/core';
import { Nastavnik } from './nastavnik';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NastavnikPredaje } from './nastavnik-predaje';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NastavnikService {

private nastavniciUrl = 'http://localhost:8080/api/v1/persons/teachers';


  constructor(private porukeService: PorukeService, private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.poruka}`);
      return of(result as T);
    };
  }


private log(poruka: string) {
  this.porukeService.add('NastavnikService ' + poruka);
}

getNastavnike(): Observable<Nastavnik[]> {
return this.http.get<Nastavnik[]>(`${this.nastavniciUrl}`)
  .pipe(
    tap(nastavnici => this.log(` nastavnici dobavljeni`)),
    catchError(this.handleError('getNastavnike', []))
  );
}

getNastavnik(id: number): Observable<Nastavnik> {
const url = `${this.nastavniciUrl}/${id}`;
return this.http.get<Nastavnik>(url).pipe(
  tap(_ => this.log(` Dobavljen nastavnik pod id=${id}`)),
  catchError(this.handleError<Nastavnik>(`getNastavnik id=${id}`))
);
}

updateNastavnik(nastavnik: Nastavnik): Observable<any> {
return this.http.put(`${this.nastavniciUrl}/${nastavnik.id}`, nastavnik, httpOptions).pipe(
  tap(_ => this.log(`Izmenjen nastavnik pod: id=${nastavnik.id}`)),
  catchError(this.handleError<any>('updateNastavnik'))
);
}

addNastavnik(nastavnik: Nastavnik): Observable<Nastavnik> {
return this.http.post<Nastavnik>(`${this.nastavniciUrl}`, nastavnik, httpOptions).
pipe(
  tap( pred => this.log(`dodat novi nastavnik ${nastavnik.ime} ${nastavnik.prezime}`)),
  catchError(this.handleError<Nastavnik>('addNastavnik'))
);
}

deleteNastavnik(nastavnik: Nastavnik): Observable<Nastavnik> {
return this.http.delete<Nastavnik>(`${this.nastavniciUrl}/${nastavnik.id}`, httpOptions).pipe(
  tap(_ => this.log(`obrisan nastavnik pod id=${nastavnik.id}`)),
  catchError(this.handleError<Nastavnik>('deleteNastavnik'))
);
}

searchNastavnikeOcena(term: string): Observable<Nastavnik[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Nastavnik[]>(`${this.nastavniciUrl}/find-by-lastName?prezime=${term}`).pipe(
    tap(_ => this.log(`pronadjeni nastavnici koji odgovaraju "${term}"`)),
    catchError(this.handleError<Nastavnik[]>('searchNastavnike', []))
  );
}
// pretraga Nastavnika po jmbg
searchNastavnik(term: string): Observable<Nastavnik[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Nastavnik[]>(`${this.nastavniciUrl}/find-by-jmbg?jmbg=${term}`).pipe(
    tap(_ => this.log(`pronadjen nastavnika za odgovarajuci "${term}"`)),
    catchError(this.handleError<Nastavnik[]>('searchNastavnik', []))
  );
}

// unos podataka u tabelu NastavnikPredaje

addNastavnikPredaje(nastavnikPredaje: NastavnikPredaje, nastavnikId: number): Observable<NastavnikPredaje> {
return this.http.post<NastavnikPredaje>(`${this.nastavniciUrl}/nastavnik_predaje/${nastavnikId}`, nastavnikPredaje, httpOptions).
pipe(
  tap( pred => this.log(`predmet i odeljenje dodeljeni`)),
  catchError(this.handleError<NastavnikPredaje>('addNastavnikPredaje'))
);
}




}
