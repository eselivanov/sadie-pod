import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TableQuestion } from '../question-table';
import { DateQuestion } from '../question-date';
import { SelectionQuestion } from '../question-selection';
import { QuestionBase } from '../question-base';
import { LiteralQuestion } from '../question-literal';
import { GDEComponentType } from '../gde.componenttype.enum';
import { DrugHistory } from '../model/drug-history';
import { KeyPair } from '../model/key-pair';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let prescribers = [
      { id: 11, name: 'Wanda Smith', licenceType: 'Physician', licenceNumber: '987783', jurisdiction: 'GTA', practiceLocationName : 'Main Office' },
      { id: 12, name: 'Mighty	Chip', licenceType: 'Physician', licenceNumber: '65054', jurisdiction: 'GTA', practiceLocationName : 'Toronto office' },
      { id: 13, name: 'Francis Smith', licenceType: 'Nurse Practitioner', licenceNumber: '68823', jurisdiction: 'Kingston', practiceLocationName : 'Kingston Office' },
      { id: 14, name: 'Bob Bobberson', licenceType: 'Physician', licenceNumber: '123456', jurisdiction: 'Kingston', practiceLocationName : 'King St' },
      { id: 15, name: 'Barney	Rubble', licenceType: 'Nurse Practitioner', licenceNumber: '75105', jurisdiction: 'Unknown', practiceLocationName : 'Secret Lab' },
      { id: 16, name: 'Pen Stapler', licenceType: 'Physician', licenceNumber: '67979', jurisdiction: 'UK', practiceLocationName : 'The Office' },
      { id: 17, name: 'Jimmy Shaker', licenceType: 'Physician', licenceNumber: '59364', jurisdiction: 'Toronto', practiceLocationName : 'Downtown Clinic' },      { id: 18, name: 'Dr IQ', licenceType: 'Nurse Practitioner', licenceNumber: '75012', jurisdiction: 'GTA', practiceLocationName : 'Headquarters' },
      { id: 19, name: 'Fred	Fred', licenceType: 'Physician', licenceNumber: '53313', jurisdiction: 'Kingston', practiceLocationName : 'Office #1' },
      { id: 20, name: 'Aaron	Alvin	Aardvark', licenceType: 'Physician', licenceNumber: '70399', jurisdiction: 'GTA', practiceLocationName : 'Home Office' }
    ];
    let prescriberDelegates = [
      { id: 11, prescriberId: 11, name: 'Chuck Key' },
      { id: 112, prescriberId: 12, name: 'Charles	Key'  },
      { id: 113, prescriberId: 13, name: 'Anzee	Chimp'  },
      { id: 114, prescriberId: 14, name: 'Tom	Brady'  },
      { id: 115, prescriberId: 15, name: 'Matt Ryan'  },
      { id: 116, prescriberId: 16, name: 'Jim	Jam'  }   
    ];
    let prescriberLocations = [
      { id:1, prescriberId:11, name: 'Main Office', address: '49 Place D\'Armes, Kingston, ON, K7L 5J3', email:'nice@doct.or', phone: '555-555-5555', fax: '555-555-5555'}
    ];
    return {prescribers, prescriberDelegates, prescriberLocations
    };
    const gdeforms = [];
    const classification = [
      {key: "Amendment", value: "Amendment"},
      {key: "Appeal", value: "Appeal"},
      {key: "Duplicate", value: "Duplicate"},
      {key: "New", value: "New"},
      {key: "Renewal", value: "Renewal"}
    ];

    const priority = [
      {key: "1", value: "Stat-Rush"},
      {key: "2", value: "Rush"},
      {key: "3", value: "Biologics"},
      {key: "4", value: "Semi-Rush"},
      {key: "5", value: "Non-Rush"},
      {key: "6", value: "Compassionate"},
      {key: "7", value: "2nd+ Appeal"},
      {key: "8", value: "RSV"},
      {key: "9", value: "Cancer drugs"},
      {key: "10", value: "Hepatitis C drugs"},
      {key: "11", value: "OxyNEO"},
      {key: "12", value: "Special Case"},
      {key: "13", value: "Drugs for Rare Diseases"},
      {key: "14", value: "MISC 1"},
      {key: "15", value: "MISC 2"},
      {key: "16", value: "OHIP+ Stat-Rush"},
      {key: "17", value: "OHIP+ Rush"},
      {key: "18", value: "OHIP+ Biologics"},
      {key: "19", value: "OHIP+ Non-Rush"}
    ];

    const specialHandling = [
      {key: "1", value: "Special Handling #1"},
      {key: "2", value: "Special Handling #2"},
      {key: "3", value: "Special Handling #3"},
      {key: "4", value: "Special Handling #4"},
      {key: "5", value: "Special Handling #5"}
    ];

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
          { type: 'LabResult', labResultType: { key: 'LDL', value: 'LDL' }, labResultValue: 5.0, startDate: new Date(), endDate: new Date(), efficacy: true },
          { type: 'LabResult', labResultType: { key: 'Mg', value: 'Mg' }, labResultValue: 100, startDate: new Date(), endDate: new Date(), efficacy: false }
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
            { type: 'LabResult', labResultType: { key: 'LDL', value: 'LDL' }, labResultValue: 5.0, startDate: new Date(), endDate: new Date(), efficacy: true },
            { type: 'LabResult', labResultType: { key: 'Mg', value: 'Mg' }, labResultValue: 100, startDate: new Date(), endDate: new Date(), efficacy: false }
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
            { fieldName: 'attachment', header: 'Attachment', controlType: 'fileupload', inputType: 'file' },
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
        //This question is being used
        new TableQuestion({
          questionId: 'Q001',
          key: 'drugHistoryResult',
          questionText: 'Drug History',
          type: 'table',
          value: [
            { type: 'DrugHistory', drug: { key: 'Happyzone', value: 'Happyzone' }, efficacy: false, tolerance: false },
            { type: 'DrugHistory', drug: { key: 'Merryzone', value: 'Merryzone' }, efficacy: false, tolerance: false },
            { type: 'DrugHistory', drug: { key: 'Gladzone', value: 'Gladzone' }, efficacy: false, tolerance: false },
            { type: 'DrugHistory', drug: { key: 'Stonedzone', value: 'Stonedzone' }, efficacy: false, tolerance: false }
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
            { fieldName: 'attachment', header: 'Attachment', controlType: 'fileupload', inputType: 'file' },
          ],
          order: 1
        }),
        //This question is being used atm
        new TableQuestion({
          questionId: 'Q002',
          key: 'labHistoryResult',
          questionText: 'Lab History',
          type: 'table',
          value: [
            //changing labTestName to labResultType
            { type: 'LabResult', labResultType: { key: 'HgB', value: 'HgB' } },
            { type: 'LabResult', labResultType: { key: 'Creatinin', value: 'Creatinin' } }
          ],
          columns: [
            {
              fieldName: 'labResultType', header: 'Lab Test Name', controlType: 'dropdown', options: [
                { key: 'HgB', value: 'HgB' },
                { key: 'Creatinin', value: 'Creatinin' }
              ]
              //Changed labResultType to labResultValue
            },
            { fieldName: 'labTestDate', header: 'Date', controlType: 'date', inputType: 'date' },
            { fieldName: 'labResultValue', header: 'Lab Result', controlType: 'text', inputType: 'text' },
            { fieldName: 'attachment', header: 'Attachment', controlType: 'fileupload', inputType: 'file' }
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
            //Changed MedicalCondition to condition
            { type: 'MedicalCondition', condition: { key: 'Seizures', value: 'Seizures' } }
          ],
          columns: [
            {
              //changed medicalCondition to condition
              fieldName: 'condition', header: 'Medical Condition', controlType: 'dropdown', options: [
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
            },
            { fieldName: 'attachment', header: 'Attachment', controlType: 'fileupload', inputType: 'file' }
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
            { type: 'DrugHistory', drug: { key: 'Happyzone', value: 'Happyzone' }, efficacy: false, tolerance: false },
            { type: 'DrugHistory', drug: { key: 'Merryzone', value: 'Merryzone' }, efficacy: false, tolerance: false },
            { type: 'DrugHistory', drug: { key: 'Gladzone', value: 'Gladzone' }, efficacy: false, tolerance: false },
            { type: 'DrugHistory', drug: { key: 'Stonedzone', value: 'Stonedzone' }, efficacy: false, tolerance: false }
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
            { type: 'LabResult', labTestName: { key: 'HgB', value: 'HgB' } },
            { type: 'LabResult', labTestName: { key: 'Creatinin', value: 'Creatinin' } }
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
            { type: 'MedicalCondition', medicalCondition: { key: 'Seizures', value: 'Seizures' }, tolerance: false }
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

    return { gdeforms, classification, priority, specialHandling };
  }
}