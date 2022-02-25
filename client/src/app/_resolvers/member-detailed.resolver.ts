import { Injectable } from '@angular/core';
import {
<<<<<<< HEAD
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
=======
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {

<<<<<<< HEAD
  constructor(private memberService: MembersService){}
=======
  constructor(private memberService: MembersService) {}
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea

  resolve(route: ActivatedRouteSnapshot): Observable<Member>{
    return this.memberService.getMember(route.paramMap.get('username'));
  }
}
