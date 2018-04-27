import { Injectable } from '@angular/core';
import { Odeljenje} from './odeljenje';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class OdeljenjeService {

  private odeljenjeUrl = 'http://localhost:8080/api/v1/classDepartmants';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getOdeljenje(id: number): Observable<Odeljenje> {
  const url = `${this.odeljenjeUrl}/${id}`;
  return this.http.get<Odeljenje>(url).pipe(
    tap(_ => this.log(` Dobavljeno odeljenje id=${id}`)),
    catchError(this.handleError<Odeljenje>(`getOdeljenje id=${id}`))
  );
}
  constructor(private porukeService: PorukeService, private http: HttpClient) { }

  private log(poruka: string) {
    this.porukeService.add('Odeljenje Service ' + poruka);
  }

  getOdeljenja(): Observable<Odeljenje[]> {
  return this.http.get<Odeljenje[]>(`${this.odeljenjeUrl}`)
    .pipe(
      tap(odeljenja => this.log(`odeljenja dobavljena`)),
      catchError(this.handleError('getOdeljenja', []))
    );
  }

  getOdeljenjaByNastavnik(nastavnikId: number): Observable<Odeljenje[]> {
  return this.http.get<Odeljenje[]>(`${this.odeljenjeUrl}/teacher/${nastavnikId}`)
    .pipe(
      tap(odeljenja => this.log(`odeljenja dobavljena`)),
      catchError(this.handleError('getOdeljenja', []))
    );
  }

  addOdeljenje(odeljenje: Odeljenje): Observable<Odeljenje> {
  return this.http.post<Odeljenje>(`${this.odeljenjeUrl}`, odeljenje, httpOptions).
  pipe(
    tap( odelj => this.log(`dodato odeljenje ${odeljenje.oznaka}`)),
    catchError(this.handleError<Odeljenje>('addOdeljenje'))
  );
}

updateOdeljenje(odeljenje: Odeljenje): Observable<any> {
return this.http.put(`${this.odeljenjeUrl}/${odeljenje.id}`,  odeljenje, httpOptions).pipe(
  tap(_ => this.log(`Izmenjeno odeljenje: id=${odeljenje.id}`)),
  catchError(this.handleError<any>('updateOdeljenje'))
);
}

  deleteOdeljenje(odeljenje: Odeljenje): Observable<Odeljenje> {
    return this.http.delete<Odeljenje>(`${this.odeljenjeUrl}/${odeljenje.id}`, httpOptions).pipe(
      tap(_ => this.log(`obrisano odeljenje id=${odeljenje.id}`)),
      catchError(this.handleError<Odeljenje>('deleteOdeljenje'))
    );
  }

}
