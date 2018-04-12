import { AfterViewInit, Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {MatTableDataSource}             from '@angular/material';
import {MatTabsModule}                  from '@angular/material/tabs';

import { PrescriberDelegateService } from '../../service/prescriber-delegate.service';
import { PrescriberDelegate } from '../../model/prescriber-delegate';

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css']
})
export class DelegateComponent implements OnInit {
  prescriberDelegateList$: Observable<PrescriberDelegate[]>;
  prescriberDelegates: PrescriberDelegate[];

  constructor(private prescriberDelegateService: PrescriberDelegateService) { }

  ngOnInit() {
    const prescriberDelegatesList$ = this.prescriberDelegateService.findAllPrescriberDelegates();
    console.log('retrieved list');
    this.prescriberDelegateList$ = prescriberDelegatesList$.pipe(
      map(prescriberDelegatesList => prescriberDelegatesList.filter(prescriberDelegate => prescriberDelegate.id >= 11) )
    ); 
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.prescriberDelegateService.addPrescriberDelegate({ name } as PrescriberDelegate)
      .subscribe(PrescriberDelegate => {
        this.prescriberDelegates.push(PrescriberDelegate);
      });
  }

  delete(prescriberDelegate: PrescriberDelegate): void {
    this.prescriberDelegates = this.prescriberDelegates.filter(h => h !== prescriberDelegate);
    this.prescriberDelegateService.deletePrescriberDelegate(prescriberDelegate).subscribe();
  }


 }
