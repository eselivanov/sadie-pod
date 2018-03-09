import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { QuestionBase }     from './question-base';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RuleServiceService {

  constructor(private http: HttpClient) { }

    /** POST: add a new hero to the database */
  processRule (questions: QuestionBase<any>[]): Observable<any> {
    console.log('processRule()');

    let facts = [];
    questions.forEach( q => { 
      q.value.filter((elem, index, arr) =>
        elem.drug !== undefined
      ).map( val => {
        return {
          "type": "DrugHistory",
          "drug": val.drug['key'],
          "efficacy": val.efficacy,
          "tolerance": val.tolerance
        }
      }).forEach(item => facts.push(item))
    });

    questions.forEach( q => { 
      q.value.filter((elem, index, arr) =>
        elem.labTestName !== undefined
      ).map( val => {
        return {
          "type": "LabResult",
          "labResultType": val.labTestName['key'],
          "labResultValue": val.labTestResult,
        }
      }).forEach(item => facts.push(item))
    });

    return this.http.post<QuestionBase<any>[]>('http://localhost:9080/liberty-proj-war/rest/rules', facts, httpOptions);
      // .pipe(
      //   catchError(this.handleError('addHero', hero))
      // );
  }

      /** POST: add a new hero to the database */
      getRules (): Observable<any> {
        console.log('getRules()');
        return this.http.get('http://localhost:9080/liberty-proj-war/rest/rules').pipe(
          tap( // Log the result or error
            error => console.log(error)
          )
        );
          // .pipe(
          //   catchError(this.handleError('addHero', hero))
          // );
      }


  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an ErrorObservable with a user-facing error message
  //   return new ErrorObservable(
  //     'Something bad happened; please try again later.');
  // };

}
