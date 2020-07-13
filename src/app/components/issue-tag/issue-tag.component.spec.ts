import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTagComponent } from './issue-tag.component';

describe('IssueTagComponent', () => {
  let component: IssueTagComponent;
  let fixture: ComponentFixture<IssueTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
