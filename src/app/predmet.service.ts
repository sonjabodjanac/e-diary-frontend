import { Injectable } from '@angular/core';
import { Predmet } from './predmet';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Odeljenje } from './odeljenje';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PredmetService {

  selectedOdeljenje: Odeljenje;

private predmetiUrl = 'http://localhost:8080/api/v1/subjects';
private predmetiUcenikUrl = 'http://localhost:8080/api/v1/subjects/find-by-student';

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
  getPredmeteByOdeljenje(odeljenjeId: number): Observable<Predmet[]> {
  return this.http.get<Predmet[]>(`${this.predmetiUrl}classDepartmant/${odeljenjeId}`)
    .pipe(
      tap(predmeti => this.log(`predmeti dobavljeni`)),
      catchError(this.handleError('getPredmete', []))
    );
}

getPredmeteByUcenik(ucenikId: number): Observable<Predmet[]> {
return this.http.get<Predmet[]>(`${this.predmetiUcenikUrl}/${ucenikId}`)
  .pipe(
    tap(predmeti => this.log(`predmeti dobavljeni`)),
    catchError(this.handleError('getPredmete', []))
  );
}

  getPredmet(id: number): Observable<Predmet> {
  const url = `${this.predmetiUrl}/${id}`;
  return this.http.get<Predmet>(url).pipe(
    tap(_ => this.log(` Dobavljen predmet id=${id}`)),
    catchError(this.handleError<Predmet>(`getPredmet id=${id}`))
  );
}
  updatePredmet (predmet: Predmet): Observable<any> {
  return this.http.put(`${this.predmetiUrl}/${predmet.id}`, predmet, httpOptions).pipe(
    tap(_ => this.log(`Izmenjen predmet: id=${predmet.id}`)),
    catchError(this.handleError<any>('updatePredmet'))
  );
}

addPredmet (predmet: Predmet): Observable<Predmet> {
  return this.http.post<Predmet>(`${this.predmetiUrl}`, predmet, httpOptions).
  pipe(
    tap( pred => this.log(`dodat predmet ${predmet.naziv}`)),
    catchError(this.handleError<Predmet>('addPredmet'))
  );
}

deletePredmet (predmet: Predmet): Observable<Predmet> {
  return this.http.delete<Predmet>(`${this.predmetiUrl}/${predmet.id}`, httpOptions).pipe(
    tap(_ => this.log(`obrisan predmet id=${predmet.id}`)),
    catchError(this.handleError<Predmet>('deletePredmet'))
  );
}

constructor(private porukeService: PorukeService, private http: HttpClient) { }

  private log(poruka: string) {
    this.porukeService.add('PredmetService' + poruka);
  }

  getPredmeteByOdeljenjeAndNastavnik(nastavnikId, odeljenjeId): Observable<Predmet[]> {
  return this.http.get<Predmet[]>(`${this.predmetiUrl}/classDepartmant/${odeljenjeId}/teacher/${nastavnikId}`)
    .pipe(
      tap(predmeti => this.log(`predmeti dobavljeni`)),
      catchError(this.handleError('getPredmeteByOdeljenjeAndNastavnik', []))
    );
  }

  getPredmete(): Observable<Predmet[]> {
  return this.http.get<Predmet[]>(`${this.predmetiUrl}`)
    .pipe(
      tap(predmeti => this.log(`predmeti dobavljeni`)),
      catchError(this.handleError('getPredmete', []))
    );
  }

}
