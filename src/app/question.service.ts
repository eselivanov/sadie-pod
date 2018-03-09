import { Injectable }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TableQuestion }    from './question-table';
import { DateQuestion }     from './question-date';
import { RadioQuestion }    from './question-radio';
import { DropdownQuestion } from './question-dropdown';
import { CheckboxQuestion } from './question-checkbox';
import { QuestionBase }     from './question-base';
import { GDEForm }          from './gdeform';
import { TextboxQuestion }  from './question-textbox';
import { GDEComponentType } from './gde.componenttype.enum';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuestionService {
  private formsUrl = 'api/gdeforms';  // URL to web api


  constructor(private http: HttpClient) { 

    // let gde = this.getQuestions2(1);

    // let s = gde.subscribe({
    //   next(x) {console.log(x.id)},
    //   error(x) {},
    // });
  }
// Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'colour',
        label: "What's your favourite colour?",
        selected: '',
        options: [
          {key: 'blue',  value: 'Blue'},
          {key: 'green',  value: 'Green'},
          {key: 'red',   value: 'Red'},
          {key: 'orange',   value: 'Orange'},
          {key: 'pink',   value: 'Pink'},
          {key: 'purple',   value: 'Purple'},
          {key: 'yellow', value: 'Yellow'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'What did you have for breakfast?',
        required: true,
        order: 1
      }),

      new DateQuestion({
        key: 'birthDate',
        label: 'When were you born?',
        type: 'date',
        order: 6
      }),

      new TableQuestion({
        key: 'labResultHistory',
        label: 'Lab Result History',
        type: 'table',
        value: [
          {labResultType: {key: 'LDL', value: 'LDL'}, labResultValue: 5.0, startDate: new Date(), endDate: new Date(), efficacy: true, tolerance: false},
          {labResultType: {key: 'Mg', value: 'Mg'}, labResultValue: 100, startDate: new Date(), endDate: new Date(), efficacy: false, tolerance: false}
        ],
        columns: [
            {fieldName: 'labResultType', header: 'Lab Result', controlType: 'dropdown', options: [
              {key: 'HgB', value: 'HgB'}, 
              {key: 'Mg', value: 'Mg'}, 
              {key: 'LDL', value: 'LDL'}
            ]},
            {fieldName: 'labResultValue', header: 'Lab Result Value', controlType: 'text', inputType: 'text'},
            {fieldName: 'startDate', header: 'Start Date', controlType: 'date', inputType: 'date'},
            {fieldName: 'endDate', header: 'End Date', controlType: 'date', inputType: 'date'},
            {fieldName: 'efficacy', header: 'Efficacy', controlType: 'checkbox', inputType: 'binary'},
            {fieldName: 'tolerance', header: 'Tolerance', controlType: 'checkbox', inputType: 'binary'},
        ],
        order: 7
      }),      

      new RadioQuestion({
        key: 'favouriteColour',
        label: 'What is your favourite pizza place?',
        type: 'radio',
        options: [
          {key: 'mammamia',  value: 'Mamma Mia'},
          {key: 'bobs',  value: "Big Bob's Pizza"},
          {key: 'capri',   value: 'Capri'}
        ],
        order: 5,
        enumType: GDEComponentType.Radio
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  /** GET hero by id. Will 404 if id not found */
  getQuestions2(id: number): Observable<GDEForm> {
    console.log("Question2");
    const url = `${this.formsUrl}/${id}`;
    return this.http.get<GDEForm>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<GDEForm>(`getHero id=${id}`))
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
