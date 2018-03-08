import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-drug-request-info',
  templateUrl: './drug-request-info.component.html',
  styleUrls: ['./drug-request-info.component.css']
})
export class DrugRequestInfoComponent implements OnInit {
  drugs : SelectItem[];
  indications : SelectItem[];

  constructor() { 
    this.drugs = [
      {value: "Drug #1", label: "Drug #1"},
      {value: "Drug #2", label: "Drug #2"},
      {value: "Drug #3", label: "Drug #3"},
      {value: "Drug #4", label: "Drug #4"},
      {value: "Drug #5", label: "Drug #5"}
    ]

    this.indications = [
      {value: "Indication #1", label: "Indication #1"},
      {value: "Indication #2", label: "Indication #2"},
      {value: "Indication #3", label: "Indication #3"},
      {value: "Indication #4", label: "Indication #4"},
      {value: "Indication #5", label: "Indication #5"}
    ]



  }




  ngOnInit() {
  }

}
