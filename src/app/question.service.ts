import { Injectable }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TableQuestion }    from './question-table';
import { DateQuestion }     from './question-date';
import { SelectionQuestion } from './question-selection';
import { QuestionBase }     from './question-base';
import { GDEForm }          from './gdeform';
import { LiteralQuestion }  from './question-literal';
import { GDEComponentType } from './gde.componenttype.enum';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuestionService {
  private formsUrl = 'api/gdeforms';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET questions by id. Will 404 if id not found */
  getQuestions(id: number): Observable<GDEForm> {
    console.log("getQuestions()");
    const url = `${this.formsUrl}/${id}`;
    return this.http.get<GDEForm>(url).pipe(
      tap(_ => this.log(`fetched question set by id=${id}`)),
      catchError(this.handleError<GDEForm>(`getQuestions id=${id}`))
    );
  }


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

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
     console.log(message);
   }

}
