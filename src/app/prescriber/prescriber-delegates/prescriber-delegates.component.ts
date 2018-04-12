import { AfterViewInit, Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {MatTableDataSource}             from '@angular/material';
import {MatTabsModule}                  from '@angular/material/tabs';

import { Prescriber } from '../../model/prescriber';
import { PrescriberDelegateService } from '../../service/prescriber-delegate.service';
import { PrescriberDelegate } from '../../model/prescriber-delegate';

@Component({
  selector: 'app-prescriber-delegates',
  templateUrl: './prescriber-delegates.component.html',
  styleUrls: ['./prescriber-delegates.component.css']
})
export class PrescriberDelegatesComponent implements OnInit {
  @Input() prescriber: Prescriber;
  prescriberDelegates: PrescriberDelegate[];
  delegates: PrescriberDelegate[];
  prescriberDelegate: PrescriberDelegate;
  prescriberDelegateList$: Observable<PrescriberDelegate[]>;

  constructor(private prescriberDelegateService: PrescriberDelegateService) { }

  ngOnInit() {
    const prescriberDelegatesList$ = this.prescriberDelegateService.getPrescriberDelegatesByPrescriberId(this.prescriber.id);
    console.log('retrieved list');
    this.prescriberDelegateList$ = prescriberDelegatesList$.pipe(
      map(prescriberDelegatesList => prescriberDelegatesList.filter(prescriberDelegate => prescriberDelegate.id >= 11) )
    );
  
    this.getPrescriberDelegates();
    this.getPrescriberDelegatesByPrescriberId();
  }
  getPrescriberDelegatesByPrescriberId(): void {
    this.prescriberDelegateService.getPrescriberDelegatesByPrescriberId(this.prescriber.id)
    .subscribe(delegates => this.delegates = delegates);
  }
  getPrescriberDelegates(): void {
    this.prescriberDelegateService.getPrescriberDelegates()
    .subscribe(prescriberDelegates => this.prescriberDelegates = prescriberDelegates);
  }

  add(name: string, prescriberId: number): void {
    name = name.trim();
    if (!name) { return; }
    let newDelegate = new PrescriberDelegate();
    newDelegate.name = name;
    newDelegate.prescriberId = prescriberId;
    this.prescriberDelegateService.addPrescriberDelegate(newDelegate)
      .subscribe(prescriberDelegate => {
        this.prescriberDelegates.push(prescriberDelegate);
      });
  }

  delete(prescriberDelegate: PrescriberDelegate): void {
    this.prescriberDelegates = this.prescriberDelegates.filter(h => h !== prescriberDelegate);
    this.prescriberDelegateService.deletePrescriberDelegate(prescriberDelegate).subscribe();
  }

}
