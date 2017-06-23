import { Injectable } from '@angular/core';

import {  
  Http,
  Request,
  RequestOptions,
  Headers
} from '@angular/http';

/**
 * This service is used to easy communication with the CentauriApi module.
 * This service offers two kinds of methods, all returning an object of 
 * type Observable.
 * 
 * Type 1. Getters are used to fetch data once. When you want to get new data, you 
 *         have to re-execute the method. If you need new data more frequently 
 *         you should consider type two
 * 
 * Type 2. Subscribers are used when the data at the source is changed very frequently.
 *         When calling a subscriber method you can provide a refresh interval. The 
 *         method then will return an observable which will fetch new data every interval.
 *         If you don't provide an interval a default one will be set.  
 */
@Injectable()
export class ApiService {

  constructor(private http: Http) { }

}
