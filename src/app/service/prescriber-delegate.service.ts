import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { PrescriberDelegate } from '../model/prescriber-delegate';
import { MessageService } from './message.service';
//I'm not sure why this is here
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class PrescriberDelegateService {

  private prescriberDelegatesUrl = 'api/prescriberDelegates';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    findAllPrescriberDelegates(): Observable<any> {
      return this.http.get('/api/prescriberDelegates')
          .pipe(
            tap(prescriberDelegates => this.log(`fetched prescriberDelegates`)),
            catchError(this.handleError('getPrescriberDelegates', []))
            );
    }
    /** GET PrescriberDelegates from the server */
  getPrescriberDelegates (): Observable<PrescriberDelegate[]> {
    return this.http.get<PrescriberDelegate[]>(this.prescriberDelegatesUrl)
      .pipe(
        tap(prescriberDelegates => this.log(`fetched prescriberDelegates`)),
        catchError(this.handleError('getPrescriberDelegates', []))
      );
  }
  /** GET prescriberDelegate by id. Return `undefined` when id not found */
  getPrescriberDelegateNo404<Data>(id: number): Observable<PrescriberDelegate> {
    const url = `${this.prescriberDelegatesUrl}/?id=${id}`;
    return this.http.get<PrescriberDelegate[]>(url)
      .pipe(
        map(prescriberDelegates => prescriberDelegates[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} PrescriberDelegate id=${id}`);
        }),
        catchError(this.handleError<PrescriberDelegate>(`getPrescriberDelegate id=${id}`))
      );
  }
  /** GET prescriberDelegate by id. Will 404 if id not found */
  getPrescriberDelegate(id: number): Observable<PrescriberDelegate> {
    const url = `${this.prescriberDelegatesUrl}/${id}`;
    return this.http.get<PrescriberDelegate>(url).pipe(
      tap(_ => this.log(`fetched prescriberDelegate id=${id}`)),
      catchError(this.handleError<PrescriberDelegate>(`getPrescriberDelegate id=${id}`))
    );
  }
  /** GET prescriberDelegate by id. Will 404 if id not found */
  getPrescriberDelegatesByPrescriberId(id: number): Observable<PrescriberDelegate[]> {
    //  const url = `${this.prescriberDelegatesUrl}/${id}`;
      //_ => this.log(`prescriberId=${id}`);
      return this.http.get<PrescriberDelegate[]>(`api/prescriberDelegates/?prescriberId=${id}`).pipe(
        tap(_ => this.log(`fetched prescriberDelegates matching id=${id}`)),
        catchError(this.handleError<PrescriberDelegate[]>(`getPrescriberDelegateByPrescriberId id=${id}`, []))
      );
    }
    /* GET prescriberDelegates whose name contains search term */
  searchPrescriberDelegates(term: string): Observable<PrescriberDelegate[]> {
    if (!term.trim()) {
      // if not search term, return empty prescriberDelegate array.
      return of([]);
    }
    return this.http.get<PrescriberDelegate[]>(`api/prescriberDelegates/?name=${term}`).pipe(
      tap(_ => this.log(`found prescriberDelegates matching "${term}"`)),
      catchError(this.handleError<PrescriberDelegate[]>('searchPrescriberDelegates', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a newprescriberDelegate to the server */
  addPrescriberDelegate (prescriberDelegate: PrescriberDelegate): Observable<PrescriberDelegate> {
    return this.http.post<PrescriberDelegate>(this.prescriberDelegatesUrl, prescriberDelegate, httpOptions).pipe(
      tap((prescriberDelegate: PrescriberDelegate) => this.log(`added prescriberDelegate w/ id=${prescriberDelegate.id}`)),
      catchError(this.handleError<PrescriberDelegate>('addPrescriberDelegate'))
    );
  }

  /** DELETE: delete the prescriberDelegate from the server */
  deletePrescriberDelegate (prescriberDelegate: PrescriberDelegate | number): Observable<PrescriberDelegate> {
    const id = typeof prescriberDelegate === 'number' ? prescriberDelegate : prescriberDelegate.id;
    const url = `${this.prescriberDelegatesUrl}/${id}`;

    return this.http.delete<PrescriberDelegate>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted prescriberDelegate id=${id}`)),
      catchError(this.handleError<PrescriberDelegate>('deletePrescriberDelegate'))
    );
  }

  /** PUT: update the PrescriberDelegate on the server */
  updatePrescriberDelegate (prescriberDelegate: PrescriberDelegate): Observable<any> {
    return this.http.put(this.prescriberDelegatesUrl, prescriberDelegate, httpOptions).pipe(
      tap(_ => this.log(`updated prescriberDelegate id=${prescriberDelegate.id}`)),
      catchError(this.handleError<any>('updatePrescriberDelegate'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PrescriberDelegateService message with the MessageService */
  private log(message: string) {
    this.messageService.add('prescriberDelegateService: ' + message);
  }
}
