import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issue-tag',
  templateUrl: './issue-tag.component.html',
  styleUrls: ['./issue-tag.component.css']
})
export class IssueTagComponent implements OnInit {

  @Input() labels:Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
