import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class UrlBuilderService {

  public static API_URL = environment.host;

  constructor() {}
  
  /**
   * Get the base url for the host api
   * @returns {String}
   */
  public getApiUrl(): string{
    return UrlBuilderService.API_URL;
  }

}
