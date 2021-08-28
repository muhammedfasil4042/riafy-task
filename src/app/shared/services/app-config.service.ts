import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface IAppConfig {
  domain: string,
  endpoints: any
}

@Injectable()
export class AppConfigService {

  /**
   * Configuration path
   */
  private readonly CONFIG_URL = 'assets/config/config.json';
  
  /**
   * Configuration object
   */
  private configuration: IAppConfig;
  
  /**
   * Constructor method
   * @param httpClient 
   */
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Import configuration and assign it to current 
   * environment constant so that no need to change 
   * code every where
   */
  setConfig(): Promise<IAppConfig> {
    return this.httpClient
      .get<IAppConfig>(this.CONFIG_URL)
      .toPromise()
      .then((config: IAppConfig) => 
        {
          environment.domain =  config.domain
          environment.endpoints =  config.endpoints
          return this.configuration = config
        });
  }

  /**
   * Read configuration 
   * ! not using currently since configuration is assigned to environment it self
   */
  readConfig(): IAppConfig {
    return this.configuration;
  }
}