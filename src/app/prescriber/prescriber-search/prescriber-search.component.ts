import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Prescriber } from '../../model/prescriber';
import { PrescriberService } from '../../service/prescriber.service';

@Component({
  selector: 'app-prescriber-search',
  templateUrl: './prescriber-search.component.html',
  styleUrls: [ './prescriber-search.component.css' ]
})
export class PrescriberSearchComponent implements OnInit {
  prescribers$: Observable<Prescriber[]>;
  private searchTerms = new Subject<string>();

  constructor(private prescriberService: PrescriberService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.prescribers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.prescriberService.searchPrescribers(term)),
    );
  }
}