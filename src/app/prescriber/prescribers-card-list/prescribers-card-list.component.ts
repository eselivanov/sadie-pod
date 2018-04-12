import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Prescriber} from "../../model/prescriber";

@Component({
    selector: 'app-prescribers-card-list',
    templateUrl: './prescribers-card-list.component.html',
    styleUrls: ['./prescribers-card-list.component.css']
})
export class PrescribersCardListComponent implements OnInit {

    @Input()
    prescribers: Prescriber[];

    constructor() {
    }

    ngOnInit() {
    }

}
