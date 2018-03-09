import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TableQuestion }    from './question-table';
import { DateQuestion }     from './question-date';
import { RadioQuestion }    from './question-radio';
import { DropdownQuestion } from './question-dropdown';
import { CheckboxQuestion } from './question-checkbox';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { GDEComponentType } from './gde.componenttype.enum';
import { DrugHistory }      from './model/drug-history';
import { KeyPair }          from './model/key-pair';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const gdeforms = [];

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

    questions = questions.sort((a, b) => a.order - b.order);

    gdeforms.push({id : 1, questions : questions});

    gdeforms.push({id : 2, 
      questions : [
        new CheckboxQuestion({
          key: 'takingDrug',
          label: 'Is this patient currrently taking Happyzone?',
          order: 1
        }),
        new CheckboxQuestion({
          key: 'triedAlternative',
          label: 'Has the patient tried an alternative Merryzone, Gladzone, or Stonedzone?',
          order: 2
        }),
        new CheckboxQuestion({
          key: 'tolerant',
          label: 'Is the patient\'s use of the drug tolerant?',
          order: 3
        }), 
        new CheckboxQuestion({
          key: 'effectiveness',
          label: 'Is the patient\'s use of the drug showing signs of effectiveness?',
          order: 4
        }),                   
        

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
      ]
    });

    gdeforms.push({id : 3, 
      questions : [
        new TableQuestion({
          questionId: 'Q001',
          key: 'drugHistoryResult',
          label: 'Drug History',
          type: 'table',
          value: [
            {drug: {key: 'Happyzone', value: 'Happyzone'},   efficacy: false, tolerance: false},
            {drug: {key: 'Merryzone', value: 'Merryzone'},   efficacy: false, tolerance: false},
            {drug: {key: 'Gladzone', value: 'Gladzone'},     efficacy: false, tolerance: false},
            {drug: {key: 'Stonedzone', value: 'Stonedzone'}, efficacy: false, tolerance: false}
          ],
          columns: [
              {fieldName: 'drug', header: 'Drug', controlType: 'dropdown', options: [
                {key: 'Happyzone', value: 'Happyzone'}, 
                {key: 'Merryzone', value: 'Merryzone'}, 
                {key: 'Gladzone', value: 'Gladzone'},
                {key: 'Stonedzone', value: 'Stonedzone'}
              ]},
              {fieldName: 'startDate', header: 'Start Date', controlType: 'date', inputType: 'date'},
              {fieldName: 'endDate', header: 'End Date', controlType: 'date', inputType: 'date'},
              {fieldName: 'efficacy', header: 'Efficacy', controlType: 'checkbox', inputType: 'binary'},
              {fieldName: 'tolerance', header: 'Tolerance', controlType: 'checkbox', inputType: 'binary'},
          ],
          order: 1
        }),      
        new TableQuestion({
          questionId: 'Q002',
          key: 'labHistoryResult',
          label: 'Lab History',
          type: 'table',
          value: [
            {labTestName: {key: 'HgB', value: 'HgB'}, tolerance: false},
            {labTestName: {key: 'Creatinin', value: 'Creatinin'}, tolerance: false}
          ],
          columns: [
              {fieldName: 'labTestName', header: 'Lab Test Name', controlType: 'dropdown', options: [
                {key: 'HgB', value: 'HgB'}, 
                {key: 'Creatinin', value: 'Creatinin'}
              ]},
              {fieldName: 'labTestDate', header: 'Date', controlType: 'date', inputType: 'date'},
              {fieldName: 'labTestResult', header: 'Lab Result', controlType: 'text', inputType: 'text'}
          ],
          order: 2
        }),
        new TableQuestion({
          questionId: 'Q003',
          key: 'medicalHistoryResult',
          label: 'Medical History',
          type: 'table',
          showControl: false,
          defaultShowControl: false,
          value: [
            {medicalCondition: {key: 'Seizures', value: 'Seizures'}, tolerance: false}
          ],
          columns: [
              {fieldName: 'medicalCondition', header: 'Medical Condition', controlType: 'dropdown', options: [
                {key: 'Seizures', value: 'Seizures'}
              ]},
              {fieldName: 'onsetDate', header: 'Onset Date', controlType: 'date', inputType: 'date'},
              {fieldName: 'remissionDate', header: 'Remission Date', controlType: 'date', inputType: 'date'},
              {fieldName: 'severity', header: 'Severity', controlType: 'dropdown', options: [
                {key: 'High', value: 'High'},
                {key: 'Medium', value: 'Medium'},
                {key: 'Low', value: 'Low'}
              ]}
          ],
          order: 3
        }),         

      ]
    });

    return {gdeforms};
  }
}