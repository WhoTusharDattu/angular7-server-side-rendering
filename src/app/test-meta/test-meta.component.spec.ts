import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMetaComponent } from './test-meta.component';

describe('TestMetaComponent', () => {
  let component: TestMetaComponent;
  let fixture: ComponentFixture<TestMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
