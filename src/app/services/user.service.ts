import { Injectable } from '@angular/core';
import { 
  Http,
  Headers,
  Request,
  RequestOptions
 } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

}
