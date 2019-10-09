import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMetaComponent } from './new-meta.component';

describe('NewMetaComponent', () => {
  let component: NewMetaComponent;
  let fixture: ComponentFixture<NewMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
