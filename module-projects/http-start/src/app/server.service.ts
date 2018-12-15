import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  readonly url = 'https://angular-ng-http-c37cb.firebaseio.com/';
  readonly appNameUrl = 'https://angular-ng-http-c37cb.firebaseio.com/data/appName.json';

  constructor(private httpClient: HttpClient) {
  }

  storeServers(servers: any[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // return this.httpClient.post(this.url + 'data.json', servers, httpOptions);
    return this.httpClient.put(this.url + 'data.json', servers, httpOptions);
  }

  getServers(): Observable<any> {
    return this.httpClient.get(this.url + 'data.json')
      .pipe(map((servers: any[]) => {
        for (const server of servers) {
          server.name = 'FETCHED_' + server.name;
        }
        return servers;
      }))
      .pipe(catchError(() => {
        return throwError('Something went wrong');
      }));
  }

  getServersAsResponse(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.url + 'data.json', {observe: 'response'});
  }

  getAppName() {
    return this.httpClient.get(this.appNameUrl);
  }
}
