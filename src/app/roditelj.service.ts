import { Injectable } from '@angular/core';
import { Roditelj } from './roditelj';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PorukeService } from './poruke.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class RoditeljService {

  private roditeljiUrl = 'http://localhost:8080/api/v1/persons/parents';


  constructor(private porukeService: PorukeService, private http: HttpClient) { }

  private log(poruka: string) {
    this.porukeService.add('RoditeljService ' + poruka);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.poruka}`);
      return of(result as T);
    };
  }

  searchRoditelj(term: string): Observable<Roditelj[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Roditelj[]>(`${this.roditeljiUrl}/find-by-jmbg?jmbg=${term}`).pipe(
      tap(_ => this.log(`pronadjen roditelj koji odgovara "${term}"`)),
      catchError(this.handleError<Roditelj[]>('searchRoditelj', []))
    );
  }

  getRoditelje(): Observable<Roditelj[]> {
  return this.http.get<Roditelj[]>(`${this.roditeljiUrl}`)
    .pipe(
      tap(roditelji => this.log(` roditelji dobavljeni`)),
      catchError(this.handleError('getRoditelje', []))
    );
  }

  getRoditelj(id: number): Observable<Roditelj> {
  return this.http.get<Roditelj>(`${this.roditeljiUrl}/${id}`).pipe(
    tap(_ => this.log(` Dobavljen roditelj pod rednim brojem id=${id}`)),
    catchError(this.handleError<Roditelj>(`getRoditelj id=${id}`))
  );
}

updateRoditelj(roditelj: Roditelj): Observable<any> {
return this.http.put(`${this.roditeljiUrl}/${roditelj.id}`, roditelj, httpOptions).pipe(
  tap(_ => this.log(`Izmenjen roditelj pod: id=${roditelj.id}`)),
  catchError(this.handleError<any>('updateNastavnik'))
);
}

addRoditelj (roditelj: Roditelj): Observable<Roditelj> {
return this.http.post<Roditelj>(`${this.roditeljiUrl}`, roditelj, httpOptions).
pipe(
  tap( pred => this.log(`Dodat roditelj ${roditelj.ime} ${roditelj.prezime}`)),
  catchError(this.handleError<Roditelj>('addNastavnik'))
);
}

deleteRoditelj(roditelj: Roditelj): Observable<Roditelj> {
return this.http.delete<Roditelj>(`${this.roditeljiUrl}/${roditelj.id}`, httpOptions).pipe(
  tap(_ => this.log(`obrisan roditelj pod id=${roditelj.id}`)),
  catchError(this.handleError<Roditelj>('deleteRoditelj'))
);
}
}
