import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { KeyPair } from '../model/key-pair';

@Injectable()
export class CodeTableService {
  private classificationUrl = 'api/classification';  // URL to web api for classification
  private priorityUrl = 'api/priority';  // URL to web api for priority
  private specialHandlingUrl = 'api/specialHandling';  // URL to web api for specialHandling

  constructor(private http: HttpClient) { }

  /** GET Classification code table */
  getClassification(): Observable<KeyPair[]> {
    console.log("getClassification()");
    return this.http.get<KeyPair[]>(this.classificationUrl).pipe(
      tap(_ => this.log(`fetched all classifications`)),
      catchError(this.handleError<KeyPair[]>(`getClassification()`))
    );
  }

  /** GET Priority code table */
  getPriority(): Observable<KeyPair[]> {
    console.log("getPriority()");
    return this.http.get<KeyPair[]>(this.priorityUrl).pipe(
      tap(_ => this.log(`fetched all priorities`)),
      catchError(this.handleError<KeyPair[]>(`getPriority()`))
    );
  }

  /** GET Priority code table */
  getSpecialHandling(): Observable<KeyPair[]> {
    console.log("getSpecialHandling()");
    return this.http.get<KeyPair[]>(this.specialHandlingUrl).pipe(
      tap(_ => this.log(`fetched all special handling`)),
      catchError(this.handleError<KeyPair[]>(`getSpecialHandling()`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
