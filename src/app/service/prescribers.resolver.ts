import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Prescriber} from "../model/prescriber";
import {Observable} from "rxjs/Observable";
import {PrescriberService} from "./prescriber.service";



@Injectable()
export class PrescriberResolver implements Resolve<Prescriber> {

    constructor(private prescriberService:PrescriberService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prescriber> {
        return this.prescriberService.getPrescriber(route.params['id']);
    }

}