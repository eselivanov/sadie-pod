import { Component, OnInit, ChangeDetectorRef }       from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'SADIE POT';

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  selectedValue: string;

  autocompleteChanged(value) {
      this.selectedValue = JSON.stringify(value);
  }
  foundItemsChanged(items) {
      // todo something
  }

}
