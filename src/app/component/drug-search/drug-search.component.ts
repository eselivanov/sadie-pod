import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ValidatorFn, AbstractControl} from '@angular/forms'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import { ElasticSearchService } from "../../service/elastic-search.service";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-drug-search',
  templateUrl: './drug-search.component.html',
  styleUrls: ['./drug-search.component.css'],
  providers: [ElasticSearchService],
  encapsulation: ViewEncapsulation.None  //This is to allow <em> tags to be modified in CSS for inner HTML  
})

export class DrugSearchComponent {

  stateCtrl: FormControl = new FormControl();
  options = [];
  filteredDrugs: Subscription;
  active: boolean = false;
  message: string = "";
  
  constructor(private es: ElasticSearchService) { } 

  ngOnInit() {
    this.filteredDrugs = this.stateCtrl.valueChanges
      .startWith(null)
      .debounceTime(200)
      .do(val => {
        //this.es.search(val)
        this.es.searchEapDrug(val)
          // .toPromise()
          .then(res => {
            this.options = ((res.hits || {}).hits || [])// extract results from elastic response
            if (this.options.length == 0 && val != null && val!="") {
              this.message="No Results Found"
            }
          })
      })
      .subscribe()
  }

  ngOnDestroy() {
    this.filteredDrugs.unsubscribe();
  }

  displayFn(obj:any) {
   return"blah";
  }
}

