import { Component, OnInit, Input } from '@angular/core';
import { Prescriber } from '../../model/prescriber';
import { PrescriberDelegate } from '../../model/prescriber-delegate';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PrescriberDelegateService } from '../../service/prescriber-delegate.service';
@Component({
  selector: 'app-prescriber-delegate',
  templateUrl: './prescriber-delegate.component.html',
  styleUrls: ['./prescriber-delegate.component.css']
})
export class PrescriberDelegateComponent implements OnInit {
  @Input() prescriber: Prescriber;
  @Input() prescriberDelegate: PrescriberDelegate;
  constructor(private route: ActivatedRoute,
    private prescriberDelegateService: PrescriberDelegateService,
    private location: Location) { }

  ngOnInit() {
    this.getPrescriberDelegate();
  }
  getPrescriberDelegate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prescriberDelegateService.getPrescriberDelegate(id)
      .subscribe(prescriberDelegate => this.prescriberDelegate = prescriberDelegate);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    this.prescriberDelegateService.updatePrescriberDelegate(this.prescriberDelegate)
      .subscribe(() => this.goBack());
  }
}
