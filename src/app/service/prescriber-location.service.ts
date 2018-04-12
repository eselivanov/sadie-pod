import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { PrescriberLocation } from '../model/prescriber-location';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PrescriberLocationService {

  private prescriberLocationsUrl = 'api/prescriberLocations';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET PrescriberLocations from the server */
  getPrescriberLocations (): Observable<PrescriberLocation[]> {
    return this.http.get<PrescriberLocation[]>(this.prescriberLocationsUrl)
      .pipe(
        tap(porescriberLocations => this.log(`fetched prescriberLocations`)),
        catchError(this.handleError('getPrescriberLocations', []))
      );
  }

    /** GET prescriberLocation by id. Will 404 if id not found */
    getPrescriberLocationsByPrescriberId(id: number): Observable<PrescriberLocation[]> {
      //  const url = `${this.prescriberLocationsUrl}/${id}`;
        //_ => this.log(`prescriberId=${id}`);
        return this.http.get<PrescriberLocation[]>(`api/prescriberLocations/?prescriberId=${id}`).pipe(
          tap(_ => this.log(`fetched prescriberLocations matching id=${id}`)),
          catchError(this.handleError<PrescriberLocation[]>(`getPrescriberLocationByPrescriberId id=${id}`, []))
        );
      }
    
    
  /** GET prescriberLocation by id. Return `undefined` when id not found */
  getPrescriberLocationNo404<Data>(id: number): Observable<PrescriberLocation> {
    const url = `${this.prescriberLocationsUrl}/?id=${id}`;
    return this.http.get<PrescriberLocation[]>(url)
      .pipe(
        map(prescriberLocations => prescriberLocations[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} PrescriberLocation id=${id}`);
        }),
        catchError(this.handleError<PrescriberLocation>(`getPrescriberLocation id=${id}`))
      );
  }

  /** GET prescriberLocation by id. Will 404 if id not found */
  getPrescriberLocation(id: number): Observable<PrescriberLocation> {
    const url = `${this.prescriberLocationsUrl}/${id}`;
    return this.http.get<PrescriberLocation>(url).pipe(
      tap(_ => this.log(`fetched prescriberLocation id=${id}`)),
      catchError(this.handleError<PrescriberLocation>(`getPrescriberLocation id=${id}`))
    );
  }

  /* GET prescriberLocations whose name contains search term */
  searchPrescriberLocations(term: string): Observable<PrescriberLocation[]> {
    if (!term.trim()) {
      // if not search term, return empty prescriberLocation array.
      return of([]);
    }
    return this.http.get<PrescriberLocation[]>(`api/prescriberLocations/?name=${term}`).pipe(
      tap(_ => this.log(`found prescriberLocations matching "${term}"`)),
      catchError(this.handleError<PrescriberLocation[]>('searchPrescriberLocations', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a newprescriberLocation to the server */
  addPrescriberLocation (prescriberLocation: PrescriberLocation): Observable<PrescriberLocation> {
    return this.http.post<PrescriberLocation>(this.prescriberLocationsUrl, prescriberLocation, httpOptions).pipe(
      tap((prescriberLocation: PrescriberLocation) => this.log(`added prescriberLocation w/ id=${prescriberLocation.id}`)),
      catchError(this.handleError<PrescriberLocation>('addPrescriberLocation'))
    );
  }

  /** DELETE: delete the prescriberLocation from the server */
  deletePrescriberLocation (prescriberLocation: PrescriberLocation | number): Observable<PrescriberLocation> {
    const id = typeof prescriberLocation === 'number' ? prescriberLocation : prescriberLocation.id;
    const url = `${this.prescriberLocationsUrl}/${id}`;

    return this.http.delete<PrescriberLocation>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted prescriberLocation id=${id}`)),
      catchError(this.handleError<PrescriberLocation>('deletePrescriberLocation'))
    );
  }

  /** PUT: update the PrescriberLocation on the server */
  updatePrescriberLocation (prescriberLocation: PrescriberLocation): Observable<any> {
    return this.http.put(this.prescriberLocationsUrl, prescriberLocation, httpOptions).pipe(
      tap(_ => this.log(`updated prescriberLocation id=${prescriberLocation.id}`)),
      catchError(this.handleError<any>('updatePrescriberLocation'))
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

  /** Log a PrescriberLocationService message with the MessageService */
  private log(message: string) {
    this.messageService.add('prescriberLocationService: ' + message);
  }
}
