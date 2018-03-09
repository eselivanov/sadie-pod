import { Component, OnInit, Input } from '@angular/core';

import { QuestionBase }     from '../question-base';
import { TableQuestion }    from '../question-table';
import { RuleServiceService } from '../rule-service.service';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.css']
})
export class ComplexTableComponent implements OnInit {

  @Input() question: TableQuestion;

  constructor(private rulesService: RuleServiceService) { }

  ngOnInit() {
  }
}
