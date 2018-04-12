import { Injectable } from '@angular/core';
import { Prescriber } from '../model/prescriber';
import { PRESCRIBERS } from '../model/mock-prescribers';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PrescriberService {

  private prescribersUrl = 'api/prescribers';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  findAllPrescribers(): Observable<any> {
    return this.http.get('/api/prescribers')
        .pipe(
          tap(prescribers => this.log(`fetched prescribers`)),
          catchError(this.handleError('getPrescribers', []))
          );
  }
  /** GET prescribers from the server */
  getPrescribers (): Observable<Prescriber[]> {
    return this.http.get<Prescriber[]>(this.prescribersUrl)
      .pipe(
        tap(prescribers => this.log(`fetched prescribers`)),
        catchError(this.handleError('getPrescribers', []))
      );
  }

  /** GET prescriber by id. Return `undefined` when id not found */
  getPrescriberNo404<Data>(id: number): Observable<Prescriber> {
    const url = `${this.prescribersUrl}/?id=${id}`;
    return this.http.get<Prescriber[]>(url)
      .pipe(
        map(prescribers => prescribers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} prescriber id=${id}`);
        }),
        catchError(this.handleError<Prescriber>(`getPrescriber id=${id}`))
      );
  }

  /** GET prescriber by id. Will 404 if id not found */
  getPrescriber(id: number): Observable<Prescriber> {
    const url = `${this.prescribersUrl}/${id}`;
    return this.http.get<Prescriber>(url).pipe(
      tap(_ => this.log(`fetched prescriber id=${id}`)),
      catchError(this.handleError<Prescriber>(`getPrescriber id=${id}`))
    );
  }

  /* GET prescribers whose name contains search term */
  searchPrescribers(term: string): Observable<Prescriber[]> {
    if (!term.trim()) {
      // if not search term, return empty prescriber array.
      return of([]);
    }
    return this.http.get<Prescriber[]>(`api/prescribers/?name=${term}`).pipe(
      tap(_ => this.log(`found prescribers matching "${term}"`)),
      catchError(this.handleError<Prescriber[]>('searchPrescribers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new prescriber to the server */
  addPrescriber (prescriber: Prescriber): Observable<Prescriber> {
    return this.http.post<Prescriber>(this.prescribersUrl, prescriber, httpOptions).pipe(
      tap((prescriber: Prescriber) => this.log(`added prescriber w/ id=${prescriber.id}`)),
      catchError(this.handleError<Prescriber>('addPrescriber'))
    );
  }

  /** DELETE: delete the prescriber from the server */
  deletePrescriber (prescriber: Prescriber | number): Observable<Prescriber> {
    const id = typeof prescriber === 'number' ? prescriber : prescriber.id;
    const url = `${this.prescribersUrl}/${id}`;

    return this.http.delete<Prescriber>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted prescriber id=${id}`)),
      catchError(this.handleError<Prescriber>('deletePrescriber'))
    );
  }

  /** PUT: update the prescriber on the server */
  updatePrescriber (prescriber: Prescriber): Observable<any> {
    return this.http.put(this.prescribersUrl, prescriber, httpOptions).pipe(
      tap(_ => this.log(`updated prescriber id=${prescriber.id}`)),
      catchError(this.handleError<any>('updatePrescriber'))
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

  /** Log a PrescriberService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PrescriberService: ' + message);
  }

  /* Old TOH method
  getPrescribers(): Observable<Prescriber[]> {
     // Todo: send the message _after_ fetching the heroes
  this.messageService.add('PrescriberService: fetched prescribers');
    return of(PRESCRIBERS);
  }
  getPrescriber(id: number): Observable<Prescriber> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`PrescriberService: fetched prescriber id=${id}`);
    return of(PRESCRIBERS.find(prescriber => prescriber.id === id));
  } */
}
