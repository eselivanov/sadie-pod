import { Component, OnInit, Input } from '@angular/core';
import {PrescriberDelegate} from "../../model/prescriber-delegate";
@Component({
  selector: 'app-prescriber-delegate-card-list',
  templateUrl: './prescriber-delegate-card-list.component.html',
  styleUrls: ['./prescriber-delegate-card-list.component.css']
})
export class PrescriberDelegateCardListComponent implements OnInit {
  @Input()
    prescriberDelegates: PrescriberDelegate[];
  constructor() { }

  ngOnInit() {
  }

}
