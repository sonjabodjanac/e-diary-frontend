import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Razred } from './razred';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RazredService {

  private razredUrl = 'http://localhost:8080/api/v1/classes';

  constructor(private porukeService: PorukeService, private http: HttpClient) { }

  private log(poruka: string) {
    this.porukeService.add('Razred Service: ' + poruka);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getRazredi (): Observable<Razred[]> {
  return this.http.get<Razred[]>(this.razredUrl)
    .pipe(
      tap(razredi => this.log(`razredi dobavljeni`)),
      catchError(this.handleError('getRazredi', []))
    );
}

getRazred(id: number): Observable<Razred> {
const url = `${this.razredUrl}/${id}`;
return this.http.get<Razred>(url).pipe(
  tap(_ => this.log(` Dobavljen razred id=${id}`)),
  catchError(this.handleError<Razred>(`getRazred id=${id}`))
);
}

updateRazred(razred: Razred): Observable<any> {
return this.http.put(`${this.razredUrl}/${razred.id}`, razred, httpOptions).pipe(
  tap(_ => this.log(`Izmenjen razred: id=${razred.id}`)),
  catchError(this.handleError<any>('updateRazred'))
);
}

addRazred(razred: Razred): Observable<Razred> {
  return this.http.post<Razred>(this.razredUrl, razred, httpOptions).
  pipe(
    tap( pred => this.log(` dodat razred ${razred.brRazreda}`)),
    catchError(this.handleError<Razred>('addRazred'))
  );
}

deleteRazred(razred: Razred): Observable<Razred> {
  return this.http.delete<Razred>(`${this.razredUrl}/${razred.id}`, httpOptions).pipe(
    tap(_ => this.log(`obrisan razred id=${razred.id}`)),
    catchError(this.handleError<Razred>('deleteRazred'))
  );
}


}
