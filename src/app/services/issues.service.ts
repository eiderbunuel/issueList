import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Issue } from '../models/issues';
import { Global } from '../services/global';

@Injectable({
    providedIn: 'root'
})

export class IssueService{
    getIssue(num: number) {
      throw new Error("Method not implemented.");
    }
    getComments(num: number) {
      throw new Error("Method not implemented.");
    }
    public url: string;
    
    constructor(private _http: HttpClient){
        this.url = Global.url;
    }

    /**
  * Get all issues available for the base URL.
  * Returns full HTTP response with headers,
  * so we can read Link reader parameter to implement
  * pagination.
  *
  * @param url: string - optional URL to fetch issues from.
  */
 
    getIssues(url: string): Observable<any>{
        return this._http.get(this.url+'repos/angular/tsickle/issues', { observe: 'response'})
    }
}