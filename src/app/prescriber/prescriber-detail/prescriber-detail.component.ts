import { Component, OnInit, Input } from '@angular/core';
import { Prescriber } from '../../model/prescriber';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PrescriberService }  from '../../service/prescriber.service';
import { PrescriberDelegate } from '../../model/prescriber-delegate';
import { PrescriberDelegateService } from '../../service/prescriber-delegate.service';
@Component({
  selector: 'app-prescriber-detail',
  templateUrl: './prescriber-detail.component.html',
  styleUrls: ['./prescriber-detail.component.css']
})
export class PrescriberDetailComponent implements OnInit {
  @Input() prescriber: Prescriber;

  prescriberDelegates: PrescriberDelegate[];

  constructor(private route: ActivatedRoute,
    private prescriberService: PrescriberService,
    private prescriberDelegateService: PrescriberDelegateService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPrescriber();
  }
  getPrescriber(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prescriberService.getPrescriber(id)
      .subscribe(prescriber => this.prescriber = prescriber);
  }
  // getPrescriberDelegate(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.prescriberDelegateService.getPrescriberDelegate(id)
  //     .subscribe(prescriberDelegate => this.prescriberDelegate = prescriberDelegate);
  // }

  getPrescriberDelegatesByPrescriberId(id: number): void {
    // const id = +this.route.snapshot.paramMap.get('id');
     this.prescriberDelegateService.getPrescriberDelegatesByPrescriberId(id)
       .subscribe(prescriberDelegates => this.prescriberDelegates = prescriberDelegates);
   }
 
   goBack(): void {
     this.location.back();
   }
 
  save(): void {
     this.prescriberService.updatePrescriber(this.prescriber)
       .subscribe(() => this.goBack());
   }
}
