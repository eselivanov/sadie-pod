import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { QuestionBase } from '../question-base';
import { KeyPair } from '../model/key-pair';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RuleServiceService {
  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the database */
  processRule(questions: QuestionBase<any>[]): Observable<any> {
    console.log('processRule()');

    var data = [];

    questions.forEach(elementArr => {
      data.push(elementArr.value);
    });

    data = _.flattenDeep(data);
    var copy = _.map(data, _.clone);

    for (var i = 0; i < copy.length; i++){
      let obj = copy[i];
      for (var key in obj){
        if( obj[key]['key']) {
          obj[key] = obj[key].value;
        }
      }
  }

    return this.http.post<QuestionBase<any>[]>('http://localhost:9080/liberty-proj-war/rest/rule/rules', JSON.stringify(copy), httpOptions);
    // .pipe(
    //   catchError(this.handleError('addHero', hero))
    // );
  }

  jsonReplacer(key, value) {
    if( value['key'] ) return <KeyPair>value.value;

    return value;
  }

  /** POST: add a new hero to the database */
  getRules(): Observable<any> {
    console.log('getRules()');
    return this.http.get('http://localhost:9080/liberty-proj-war/rest/rule/rules').pipe(
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
