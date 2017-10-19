import {Injectable} from '@angular/core';
import {Assistants} from '../../model/assistants.model';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class AssistantService {

  constructor(private http: HttpClient) {
  }

  private USER_URL = 'https://randomuser.me/api/'; // http://api.randomuser.me';

  getAssistants(number:string): Observable<Assistants> {
    return this.http.get<any>(this.USER_URL, {
      params: new HttpParams().set('results', number)
    })
      .catch(this.handleError);
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
