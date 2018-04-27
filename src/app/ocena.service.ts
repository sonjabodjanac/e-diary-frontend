import { Injectable } from '@angular/core';
import { Ocena } from './ocena';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OcenaService {

  private oceneUrl = 'http://localhost:8080/api/v1/grades';

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
  getOcena(id: number): Observable<Ocena> {
  const url = `${this.oceneUrl}/${id}`;
  return this.http.get<Ocena>(url).pipe(
    tap(_ => this.log(` Dobavljena ocena id=${id}`)),
    catchError(this.handleError<Ocena>(`getOcena id=${id}`))
  );
}

  getOceneByPredmetAndUcenik(predmetId: number, ucenikId: number): Observable<Ocena[]> {
    this.log(`Dobavljene ocene za ucenika pod rednim brojem: ${ucenikId} iz predmeta pod rednim brojem: ${predmetId}`);
    return this.http.get<Ocena[]>(`${this.oceneUrl}/subject/${predmetId}/student/${ucenikId}`);
}

  addOcena(ocena: Ocena, nastavnikId, predmetId, ucenikId): Observable<Ocena> {
  return this.http.post<Ocena>(`${this.oceneUrl}/teacher/${nastavnikId}/subject/${predmetId}/student/${ucenikId}`,
     ocena, httpOptions).
  pipe(
    tap( o => this.log(`dodata ocena ${ocena.vrednost}`)),
    catchError(this.handleError<Ocena>('addOcena'))
  );
}

updateOcena (ocena: Ocena): Observable<any> {
return this.http.put(`${this.oceneUrl}/${ocena.id}`, ocena, httpOptions).pipe(
  tap(_ => this.log(`Izmenjena ocena: id=${ocena.id}`)),
  catchError(this.handleError<any>('updateOcena'))
);
}


addOcenaPrvoPolugodiste(ocena: Ocena, nastavnikId, predmetId, ucenikId): Observable<Ocena> {
return this.http.post<Ocena>(`${this.oceneUrl}/avg-grade-first-sem/teacher/${nastavnikId}/subject/${predmetId}/student/${ucenikId}`,
   ocena, httpOptions).
pipe(
  tap( pred => this.log(`zakljucena ocena ${ocena.vrednost}`)),
  catchError(this.handleError<Ocena>('addOcenaPrvoPolugodiste'))
);
}
addOcenaDrugoPolugodiste(ocena: Ocena, nastavnikId, predmetId, ucenikId): Observable<Ocena> {
return this.http.post<Ocena>(`${this.oceneUrl}/final-grade/teacher/${nastavnikId}/subject/${predmetId}/student/${ucenikId}`,
   ocena, httpOptions).
pipe(
  tap( pred => this.log(`zakljucena ocena ${ocena.vrednost}`)),
  catchError(this.handleError<Ocena>('addOcenaDrugoPolugodiste'))
);
}

deleteOcena(ocena: Ocena): Observable<Ocena> {
  return this.http.delete<Ocena>(`${this.oceneUrl}/${ocena.id}`, httpOptions).pipe(
    tap(_ => this.log(`obrisana ocena id=${ocena.id}`)),
    catchError(this.handleError<Ocena>('deleteOcena'))
  );
}

}
