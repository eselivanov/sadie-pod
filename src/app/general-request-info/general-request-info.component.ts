import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-general-request-info',
  templateUrl: './general-request-info.component.html',
  styleUrls: ['./general-request-info.component.css']
})
export class GeneralRequestInfoComponent implements OnInit {

  classifications: SelectItem[]

  constructor() { 
    this.classifications = [
      {value: "Amendment", label: "Amendment"},
      {value: "Appeal", label: "Appeal"},
      {value: "Duplicate", label: "Duplicate"},
      {value: "New", label: "New"},
      {value: "Renewal", label: "Renewal"}
    ]

  }

  ngOnInit() {
  }

}
