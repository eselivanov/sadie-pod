import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { MatTableDataSource } from '@angular/material';
import {PickListModule} from 'primeng/picklist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Dropdown multi select angular 4
  optionsModel: number[];
  //optionsModel: number[] = [1,];
  //myOptions: IMultiSelectOption[];

  //Dropdown multi select angular2
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
 

  myOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Car brands'},
    { id: 2, name: 'Volvo' },
    { id: 3, name: 'Honda'},
    { id: 4, name: 'BMW'},
    { id: 5, name: 'Colors' },
    { id: 6, name: 'Blue' },
    { id: 7, name: 'Red' },
    { id: 8, name: 'White'}
  ];
  /*  myOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Car brands', isLabel: true },
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 5, name: 'Colors', isLabel: true },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
  ]; */
  mySettings: IMultiSelectSettings = {
    enableSearch: false,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
};
// Text configuration

myTexts: IMultiSelectTexts = {
  checkAll: 'Select all',
  uncheckAll: 'Unselect all',
  checked: 'item selected',
  checkedPlural: 'items selected',
  searchPlaceholder: 'Find',
  searchEmptyResult: 'Nothing found...',
  searchNoRenderText: 'Type in search box to see results...',
  defaultTitle: 'Select Something',
  allSelected: 'All selected',
};
 //Material List
 typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
 //Primeng
  list1: string[];
    
  list2: string[];
  constructor() { }

  ngOnInit() {
    this.list1 = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    this.list2 =[];
    /*
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
  ];
  */
 this.dropdownList = [
  {"id":1,"itemName":"India"},
  {"id":2,"itemName":"Singapore"},
  {"id":3,"itemName":"Australia"},
  {"id":4,"itemName":"Canada"},
  {"id":5,"itemName":"South Korea"},
  {"id":6,"itemName":"Germany"},
  {"id":7,"itemName":"France"},
  {"id":8,"itemName":"Russia"},
  {"id":9,"itemName":"Italy"},
  {"id":10,"itemName":"Sweden"}
];
  this.selectedItems = [  
  {"id":2,"itemName":"Singapore"},
  {"id":3,"itemName":"Australia"},
  {"id":4,"itemName":"Canada"},
  {"id":5,"itemName":"South Korea"}
  ];
  this.dropdownSettings = { 
    singleSelection: false, 
    text:"Select Countries",
    selectAllText:'Select All',
    unSelectAllText:'UnSelect All',
    enableSearchFilter: true,
    classes:"myclass custom-class"
  };
  }
  onChange() {
    console.log(this.optionsModel);
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}



// Labels / Parents

}
