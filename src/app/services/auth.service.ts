import { Injectable } from '@angular/core';
import { UrlBuilderService } from './url-builder.service';
import { 
  Http,
  Request,
  RequestOptions,
  Headers,
  Response
} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  /**
   * Api Base path
   */
  private base;

  constructor(private http: Http, private urlbuilder: UrlBuilderService) {
    this.base = this.urlbuilder.getApiUrl();
  }

  /**
   * Login at the host using the provided credentials
   * @param {String} username 
   * @param {String} password 
   */
  public login(username, password): Observable<any> {
    let headers = new Headers({
      username, password
    });
    let opts = new RequestOptions({headers});
    return this.http.post(this.base + '/auth', null, opts).map((resp: Response) => console.log(resp)).catch((err) => this.handeError(err));
  }

  /**
   * Handle login errors
   * @param {Error} err 
   */
  private handeError(err: any) {
    // TODO redirect to login site
    return Observable.throw('Internal server error');
  }

}
