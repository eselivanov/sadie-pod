import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TableQuestion } from './question-table';
import { DateQuestion } from './question-date';
import { SelectionQuestion } from './question-selection';
import { QuestionBase } from './question-base';
import { LiteralQuestion } from './question-literal';
import { GDEComponentType } from './gde.componenttype.enum';
import { DrugHistory } from './model/drug-history';
import { KeyPair } from './model/key-pair';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const gdeforms = [];

    let questions: QuestionBase<any>[] = [

      new SelectionQuestion({
        controlType: 'dropdown',
        key: 'colour',
        questionText: "What's your favourite colour?",
        selected: '',
        options: [
          { key: 'blue', value: 'Blue' },
          { key: 'green', value: 'Green' },
          { key: 'red', value: 'Red' },
          { key: 'orange', value: 'Orange' },
          { key: 'pink', value: 'Pink' },
          { key: 'purple', value: 'Purple' },
          { key: 'yellow', value: 'Yellow' }
        ],
        order: 3
      }),

      new LiteralQuestion({
        controlType: 'text',
        key: 'firstName',
        questionText: 'What did you have for breakfast?',
        required: true,
        order: 1
      }),

      new SelectionQuestion({
        controlType: 'checkbox',
        key: 'takingDrug',
        questionText: 'Is this patient currrently taking Happyzone?',
        order: 1
      }),

      new DateQuestion({
        controlType: 'date',
        key: 'birthDate',
        questionText: 'When were you born?',
        type: 'date',
        order: 6
      }),

      new TableQuestion({
        key: 'labResultHistory',
        questionText: 'Lab Result History',
        primaryIdFieldName: 'labResultType',
        hintText: 'Please enter lab result information',
        type: 'table',
        value: [
          { labResultType: { key: 'LDL', value: 'LDL' }, labResultValue: 5.0, startDate: new Date(), endDate: new Date(), efficacy: true, tolerance: false },
          { labResultType: { key: 'Mg', value: 'Mg' }, labResultValue: 100, startDate: new Date(), endDate: new Date(), efficacy: false, tolerance: false }
        ],
        columns: [
          {
            fieldName: 'labResultType', header: 'Lab Result', controlType: 'dropdown', options: [
              { key: 'HgB', value: 'HgB' },
              { key: 'Mg', value: 'Mg' },
              { key: 'LDL', value: 'LDL' }
            ]
          },
          { fieldName: 'labResultValue', header: 'Lab Result Value', controlType: 'text', inputType: 'text' },
          { fieldName: 'startDate', header: 'Start Date', controlType: 'date', inputType: 'date' },
          { fieldName: 'endDate', header: 'End Date', controlType: 'date', inputType: 'date' },
          { fieldName: 'efficacy', header: 'Efficacy', controlType: 'checkbox', inputType: 'binary' },
          { fieldName: 'tolerance', header: 'Tolerance', controlType: 'checkbox', inputType: 'binary' },
        ],
        order: 7
      }),

      new SelectionQuestion({
        controlType: 'dropdown',
        key: 'favouriteColour',
        questionText: 'What is your favourite pizza place?',
        type: 'radio',
        options: [
          { key: 'mammamia', value: 'Mamma Mia' },
          { key: 'bobs', value: "Big Bob's Pizza" },
          { key: 'capri', value: 'Capri' }
        ],
        order: 5,
        enumType: GDEComponentType.Radio
      })
    ];

    questions = questions.sort((a, b) => a.order - b.order);

    gdeforms.push({ id: 1, questions: questions });

    gdeforms.push({
      id: 2,
      questions: [
        new SelectionQuestion({
          controlType: 'checkbox',
          key: 'takingDrug',
          questionText: 'Is this patient currrently taking Happyzone?',
          order: 1
        }),
        new SelectionQuestion({
          controlType: 'checkbox',
          key: 'triedAlternative',
          questionText: 'Has the patient tried an alternative Merryzone, Gladzone, or Stonedzone?',
          order: 2
        }),
        new SelectionQuestion({
          controlType: 'checkbox',
          key: 'tolerant',
          questionText: 'Is the patient\'s use of the drug tolerant?',
          order: 3
        }),
        new SelectionQuestion({
          controlType: 'checkbox',
          key: 'effectiveness',
          questionText: 'Is the patient\'s use of the drug showing signs of effectiveness?',
          order: 4
        }),


        new SelectionQuestion({
          controlType: 'dropdown',
          key: 'colour',
          questionText: "What's your favourite colour?",
          selected: '',
          options: [
            { key: 'blue', value: 'Blue' },
            { key: 'green', value: 'Green' },
            { key: 'red', value: 'Red' },
            { key: 'orange', value: 'Orange' },
            { key: 'pink', value: 'Pink' },
            { key: 'purple', value: 'Purple' },
            { key: 'yellow', value: 'Yellow' }
          ],
          order: 3
        }),

        new LiteralQuestion({
          controlType: 'text',
          key: 'firstName',
          questionText: 'What did you have for breakfast?',
          required: true,
          order: 1
        }),

        new DateQuestion({
          controlType: 'date',
          key: 'birthDate',
          questionText: 'When were you born?',
          type: 'date',
          order: 6
        }),

        new TableQuestion({
          key: 'labResultHistory',
          questionText: 'Lab Result History',
          type: 'table',
          primaryIdFieldName: 'labResultType',
          hintText: 'Please enter lab result information',
          value: [
            { labResultType: { key: 'LDL', value: 'LDL' }, labResultValue: 5.0, startDate: new Date(), endDate: new Date(), efficacy: true, tolerance: false },
            { labResultType: { key: 'Mg', value: 'Mg' }, labResultValue: 100, startDate: new Date(), endDate: new Date(), efficacy: false, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'labResultType', header: 'Lab Result', controlType: 'dropdown', options: [
                { key: 'HgB', value: 'HgB' },
                { key: 'Mg', value: 'Mg' },
                { key: 'LDL', value: 'LDL' }
              ]
            },
            { fieldName: 'labResultValue', header: 'Lab Result Value', controlType: 'text', inputType: 'text' },
            { fieldName: 'startDate', header: 'Start Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'endDate', header: 'End Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'efficacy', header: 'Efficacy', controlType: 'checkbox', inputType: 'binary' },
            { fieldName: 'tolerance', header: 'Tolerance', controlType: 'checkbox', inputType: 'binary' },
          ],
          order: 7
        }),

        new SelectionQuestion({
          controlType: 'radio',
          key: 'favouriteColour',
          questionText: 'What is your favourite pizza place?',
          type: 'radio',
          options: [
            { key: 'mammamia', value: 'Mamma Mia' },
            { key: 'bobs', value: "Big Bob's Pizza" },
            { key: 'capri', value: 'Capri' }
          ],
          order: 5,
          enumType: GDEComponentType.Radio
        })
      ]
    });

    gdeforms.push({
      id: 3,
      questions: [
        new TableQuestion({
          questionId: 'Q001',
          key: 'drugHistoryResult',
          questionText: 'Drug History',
          type: 'table',
          value: [
            { drug: { key: 'Happyzone', value: 'Happyzone' }, efficacy: false, tolerance: false },
            { drug: { key: 'Merryzone', value: 'Merryzone' }, efficacy: false, tolerance: false },
            { drug: { key: 'Gladzone', value: 'Gladzone' }, efficacy: false, tolerance: false },
            { drug: { key: 'Stonedzone', value: 'Stonedzone' }, efficacy: false, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'drug', header: 'Drug', controlType: 'dropdown', options: [
                { key: 'Happyzone', value: 'Happyzone' },
                { key: 'Merryzone', value: 'Merryzone' },
                { key: 'Gladzone', value: 'Gladzone' },
                { key: 'Stonedzone', value: 'Stonedzone' }
              ]
            },
            { fieldName: 'startDate', header: 'Start Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'endDate', header: 'End Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'efficacy', header: 'Efficacy', controlType: 'checkbox', inputType: 'binary' },
            { fieldName: 'tolerance', header: 'Tolerance', controlType: 'checkbox', inputType: 'binary' },
          ],
          order: 1
        }),
        new TableQuestion({
          questionId: 'Q002',
          key: 'labHistoryResult',
          questionText: 'Lab History',
          type: 'table',
          value: [
            { labTestName: { key: 'HgB', value: 'HgB' }, tolerance: false },
            { labTestName: { key: 'Creatinin', value: 'Creatinin' }, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'labTestName', header: 'Lab Test Name', controlType: 'dropdown', options: [
                { key: 'HgB', value: 'HgB' },
                { key: 'Creatinin', value: 'Creatinin' }
              ]
            },
            { fieldName: 'labTestDate', header: 'Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'labTestResult', header: 'Lab Result', controlType: 'text', inputType: 'text' }
          ],
          order: 2
        }),
        new TableQuestion({
          questionId: 'Q003',
          key: 'medicalHistoryResult',
          questionText: 'Medical History',
          type: 'table',
          showControl: false,
          defaultShowControl: false,
          value: [
            { medicalCondition: { key: 'Seizures', value: 'Seizures' }, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'medicalCondition', header: 'Medical Condition', controlType: 'dropdown', options: [
                { key: 'Seizures', value: 'Seizures' }
              ]
            },
            { fieldName: 'onsetDate', header: 'Onset Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'remissionDate', header: 'Remission Date', controlType: 'date', inputType: 'date' },
            {
              fieldName: 'severity', header: 'Severity', controlType: 'dropdown', options: [
                { key: 'High', value: 'High' },
                { key: 'Medium', value: 'Medium' },
                { key: 'Low', value: 'Low' }
              ]
            }
          ],
          order: 3
        }),

      ]
    });


    gdeforms.push({
      id: 4,
      questions: [
        new SelectionQuestion({
          controlType: 'checkbox',
          key: 'checkedABox',
          questionText: 'Have you ever been asked to check a box before?',
          order: 1
        }),

        new LiteralQuestion({
          controlType: 'text',
          key: 'textQuestion',
          questionText: 'Please describe your experience?',
          hintText: "Checkboxes can be tough to deal with, tell us about it.",
          order: 2
        }),

        new LiteralQuestion({
          controlType: 'textarea',
          key: 'textAreaQuestion',
          questionText: 'Describe your experience in excruciating detail?',
          hintText: "Do tell me more....",
          order: 3
        }),

        new LiteralQuestion({
          controlType: 'integer',
          key: 'integerQuestion',
          questionText: "How are the questions going so far?",
          hintText: "Rate your experience between 1-10",
          order: 4
        }),

        new LiteralQuestion({
          controlType: 'decimal',
          key: 'decimalQuestion',
          questionText: 'Can you be a little more precise?',
          hintText: "Rate your experience between 1-10. Please enter with precision of up to 5 significant digits",
          order: 5
        }),

        new SelectionQuestion({
          controlType: 'dropdown',
          key: 'experience',
          questionText: "Rate your experience so far?",
          selected: '',
          options: [
            { key: 'good', value: 'Good' },
            { key: 'great', value: 'Great' },
            { key: 'exceptional', value: 'Exceptional' }
          ],
          order: 3
        }),

        new SelectionQuestion({
          controlType: 'radio',
          key: 'recommendation',
          questionText: 'Would you recommend us you your friends? Perhaps like us on social media?',
          options: [
            { key: 'yes', value: 'Yes' },
            { key: 'no', value: "No" }
          ],
          order: 4,
          enumType: GDEComponentType.Radio
        }),

        new DateQuestion({
          controlType: 'date',
          key: 'date',
          questionText: 'Schedule a date so we can ask more questions?',
          type: 'date',
          order: 6
        }),

        new TableQuestion({
          questionId: 'Q001',
          key: 'drugHistoryResult',
          questionText: 'Drug History',
          hintText: 'Please enter drug history information',
          type: 'table',
          value: [
            { drug: { key: 'Happyzone', value: 'Happyzone' }, efficacy: false, tolerance: false },
            { drug: { key: 'Merryzone', value: 'Merryzone' }, efficacy: false, tolerance: false },
            { drug: { key: 'Gladzone', value: 'Gladzone' }, efficacy: false, tolerance: false },
            { drug: { key: 'Stonedzone', value: 'Stonedzone' }, efficacy: false, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'drug', header: 'Drug', controlType: 'dropdown', options: [
                { key: 'Happyzone', value: 'Happyzone' },
                { key: 'Merryzone', value: 'Merryzone' },
                { key: 'Gladzone', value: 'Gladzone' },
                { key: 'Stonedzone', value: 'Stonedzone' }
              ]
            },
            { fieldName: 'startDate', header: 'Start Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'endDate', header: 'End Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'efficacy', header: 'Efficacy', controlType: 'checkbox', inputType: 'binary' },
            { fieldName: 'tolerance', header: 'Tolerance', controlType: 'checkbox', inputType: 'binary' },
          ],
          order: 1
        }),
        new TableQuestion({
          questionId: 'Q002',
          key: 'labHistoryResult',
          questionText: 'Lab Result History',
          hintText: 'Please enter lab result information',
          type: 'table',
          value: [
            { labTestName: { key: 'HgB', value: 'HgB' }, tolerance: false },
            { labTestName: { key: 'Creatinin', value: 'Creatinin' }, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'labTestName', header: 'Lab Test Name', controlType: 'dropdown', options: [
                { key: 'HgB', value: 'HgB' },
                { key: 'Creatinin', value: 'Creatinin' }
              ]
            },
            { fieldName: 'labTestDate', header: 'Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'labTestResult', header: 'Lab Result', controlType: 'text', inputType: 'text' }
          ],
          order: 2
        }),
        new TableQuestion({
          questionId: 'Q003',
          key: 'medicalHistoryResult',
          questionText: 'Medical History',
          type: 'table',
          showControl: false,
          defaultShowControl: false,
          value: [
            { medicalCondition: { key: 'Seizures', value: 'Seizures' }, tolerance: false }
          ],
          columns: [
            {
              fieldName: 'medicalCondition', header: 'Medical Condition', controlType: 'dropdown', options: [
                { key: 'Seizures', value: 'Seizures' }
              ]
            },
            { fieldName: 'onsetDate', header: 'Onset Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'remissionDate', header: 'Remission Date', controlType: 'date', inputType: 'date' },
            {
              fieldName: 'severity', header: 'Severity', controlType: 'dropdown', options: [
                { key: 'High', value: 'High' },
                { key: 'Medium', value: 'Medium' },
                { key: 'Low', value: 'Low' }
              ]
            }
          ],
          order: 3
        }),

      ]
    });

    return { gdeforms };
  }
}