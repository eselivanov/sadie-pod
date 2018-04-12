import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PrescriberDelegate} from "../model/prescriber-delegate";
import {Observable} from "rxjs/Observable";
import {PrescriberDelegateService} from "./prescriber-delegate.service";



@Injectable()
export class PrescriberDelegatesResolver implements Resolve<PrescriberDelegate> {
 
    constructor(private prescriberDelegateService:PrescriberDelegateService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PrescriberDelegate> {
        return this.prescriberDelegateService.getPrescriberDelegate(route.params['id']);
    }

}