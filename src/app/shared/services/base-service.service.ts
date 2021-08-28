import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(
		private objHttp: HttpClient
  ) { }
  	/**
	 * Methods for communication with server
	 */
	objMethods = {
		/**
	   * Post request to backend
	   * @param strUrl [string] end points 
	   * @param strPort [string] port
	   * @param objJson object to pass to the backend
	   */
		POST: (strUrl: string, strPort: string, objJson: any = null,
			objOptions?: any): Observable<any> => {
			return this.objHttp.post(`${environment.domain}${(!!strPort && ('' + strPort) !== '80') ? ':' + strPort : ''}/${strUrl}`, objJson,
				objOptions);
		},
		/**
	   * Delete request to backend
	   * @param strUrl [string] end points
	   * @param strPort [string] port
	   * @param objJson object to pass to the backend
	   */
		DELETE: (strUrl: string, strPort: string, objJson: any = null): Observable<any> => {
			return this.objHttp.request('delete', `${environment.domain}${(!!strPort && ('' + strPort) !== '80') ? ':' + strPort : ''}/${strUrl}`, { body: objJson });
		},
		/**
	   * Put request to backend
	   * @param strUrl [string] end points 
	   * @param strPort [string] port
	   * @param objJson object to pass to the backend
	   */
		PUT: (strUrl: string, strPort: string, objJson: any = null): Observable<any> => {
			return this.objHttp.put(`${environment.domain}${(!!strPort && ('' + strPort) !== '80') ? ':' + strPort : ''}/${strUrl}`, objJson);
		},
		/**
		 * Get request to backend
		 * @param strUrl [string] end points
		 * @param strPort [string] port
		 * @param objOptions options like headers or responseType
		 */
		GET: (
			strUrl: string,
			strPort: string,
			objOptions?: any
		): Observable<any> => {
			return this.objHttp.get(
				`${environment.domain}${!!strPort && "" + strPort !== "80" ? ":" + strPort : ""}/${strUrl}`, objOptions);
		}
	}
}
