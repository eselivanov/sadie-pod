import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {MatTableDataSource}             from '@angular/material';
import {MatTabsModule}                  from '@angular/material/tabs';
import { Prescriber } from '../../model/prescriber';


//import { Prescriber } from '../model/prescriber';
import { PrescriberService } from '../../service/prescriber.service';
@Component({
  selector: 'app-prescribers',
  templateUrl: './prescribers.component.html',
  styleUrls: ['./prescribers.component.css']
})
export class PrescribersComponent implements OnInit {
  
  columnsToDisplay = ['name', 'id'];
  prescriberList$: Observable<Prescriber[]>;
  prescribers: Prescriber[];
  constructor(private prescriberService: PrescriberService) { }

  ngOnInit() {
    const prescribersList$ = this.prescriberService.findAllPrescribers();
    console.log('retrieved list');
    this.prescriberList$ = prescribersList$.pipe(
      map(prescribersList => prescribersList.filter(prescriber => prescriber.id >= 11) )
    );
    
    this.getPrescribers();
  }
  
  getPrescribers(): void {
    this.prescriberService.getPrescribers()
      .subscribe(prescribers => this.prescribers = prescribers);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.prescriberService.addPrescriber({ name } as Prescriber)
      .subscribe(prescriber => {
        this.prescribers.push(prescriber);
      });
  }
  delete(prescriber: Prescriber): void {
    this.prescribers = this.prescribers.filter(h => h !== prescriber);
    this.prescriberService.deletePrescriber(prescriber).subscribe();
  }
}
