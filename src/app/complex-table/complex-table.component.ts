import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { QuestionBase }     from '../question-base';
import { TableQuestion }    from '../question-table';
import { RuleServiceService } from '../service/rule-service.service';
import { MatTableDataSource } from '@angular/material';
import { KeyPair }            from '../model/key-pair';
//adding table column to try and initialize columns variable
import { TableColumn } from '../table-column';


import { FileUploadModule, FileUpload, DataListModule, DataList } from 'primeng/primeng';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.css']
})
export class ComplexTableComponent implements OnChanges {
  //displayedColumns = [];
  @Input() question?: TableQuestion;
  displayedColumns?: string[];
  dataSource = undefined;
  //added columns to try to initialize
  //columns?: TableColumn[];
  
  constructor(private rulesService: RuleServiceService) { 
    //trying to initialize columns
    //this.columns = [];
    //this.question.columns = [];
    //this.question.value = ['questionID'];
  }
  uploadedFiles?: any[] = [];

 

  ngOnInit() {
  //  if (this.question.columns.map != undefined){
    
  //  }
   // ['questionID']; // 
    
    // this.displayedColumns = ['efficacy'];
    
    //this.dataSource = new MatTableDataSource(this.question.value);
    //this.displayedColumns =this.question.columns.map(e => { return e.fieldName });
  }
  ngOnChanges() {
    //  if (this.question.columns.map != undefined){
      
    //  }
     // ['questionID']; // 
      
      // this.displayedColumns = ['efficacy'];
      
      this.dataSource = new MatTableDataSource(this.question.value);
      this.displayedColumns =this.question.columns.map(e => { return e.fieldName });
    }

  test(rows : any) : MatTableDataSource<any> {
    return new MatTableDataSource(rows);
  }

  compareFn(c1: KeyPair, c2: KeyPair): boolean {
    return c1 && c2 ? c1.key === c2.key : c1 === c2;
  }
  onUpload(event, rowData) {
    console.log(event);
    console.log(rowData);
    for(let file of event.files) {
      console.log(file);
      rowData.attachment = file;
      this.uploadedFiles.push(file);
    }
    console.log(this.dataSource);
  }
}
