import { Injectable } from '@angular/core';

import {  
  Http,
  Request,
  RequestOptions,
  Headers
} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

  private static INTERVAL = 3000;

  constructor(private http: Http) { }

  /**
   * Get the currently running servers on the network
   * @return {Observable}
   */
  getServers(): Observable<any>{
    // TODO implement api logic
    return null;
  }

  /**
   * Get the subscriber wrapper for currently active servers
   * @param {Number} interval Refresh pull interval 
   * @returns {Observable} 
   */
  getServersSubscriber(interval = ApiService.INTERVAL): Observable<any> {
    return Observable
        .interval(interval)
        .flatMap(() => {
          return this.getServers();
        });
  }

  /**
   * Get templates currently loaded on the network
   * @returns {Observable}
   */
  getTemplates(): Observable<any> {
    return null;
  }

  /**
   * Get the subscriber wrapper for all loaded templates
   * NOTE: Once the network is setup, templates won't change very 
   *       frequently. Keep that in mind when using this method.
   * 
   * @param {Number} interval Refresh pull interval
   */
  getTemplatesSubscriber(interval = ApiService.INTERVAL): Observable<any> {
    return Observable
        .interval(interval)
        .flatMap(() => {
          return this.getTemplates();
        });
  }

  /**
   * Get all users currently registered in the system
   * @return {Observable}
   */
  getUsers(): Observable<any>{
    return null;
  }

  /**
   * Get the subscriber wrapper for all users
   * @param {Number} interval Refresh pull interval 
   */
  getUsersSubscriber(interval= ApiService.INTERVAL): Observable<any> {
    return Observable
        .interval(interval)
        .flatMap(() => {
          return this.getUsers();
        });
  }

  /**
   * Get the current count of players on the network
   * 
   * TODO: Implement pagination and site player limit
   * @returns {Observable}
   */
  getOnlinePlayers(): Observable<any> {
    return null;
  }

  /**
   * Get the subscriber for the player count
   * @param {Number} interval Refresh interval
   * @returns {Observable} 
   */
  getOnlinePlayersSubscriber(interval = ApiService.INTERVAL): Observable<any> {
    return Observable
        .interval(interval)
        .flatMap(() => {
          return this.getOnlinePlayers();
        });
  }

  /**
   * Get a list of all currently connected BungeeCord servers
   * @returns {Observable}
   */
  getLobbys(): Observable<any> {
    return null;
  }

  /**
   * Get the subscriber for all connected BungeeCord servers
   * @param {Number} interval 
   */
  getLobbySubscriber(interval = ApiService.INTERVAL): Observable<any> {
    return Observable
        .interval(interval)
        .flatMap(() => {
          return this.getLobbys();
        });
  }

  /**
   * Get all installed modules
   * @returns {Observable}
   */
  getModules(): Observable<any> {
    return null;
  }

  /**
   * Get the current version CentauriCloud
   * @returns {Observable}
   */
  getCentauriVersion(): Observable<any> {
    return null;
  }

}
