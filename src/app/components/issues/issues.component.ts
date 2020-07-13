import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IssueService } from '../../services/issues.service';
import { IssueTagComponent } from '../issue-tag/issue-tag.component';
import { Issue } from '../../models/issues';
import { Global } from '../../services/global';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [IssueService]
})
export class IssuesComponent implements OnInit {

  issues: Observable<any>;
  pageLinks: object;

  constructor(private _issueService: IssueService) { 
    //this.url = Global.url;
  }

  getIssues(url?: string):void{
    this._issueService.getIssues(url).subscribe(
      (response) => {
        console.log(response);
        this.issues = response.body;
      }
    )
  }

  ngOnInit(): void {
    this.getIssues();
  }

}
