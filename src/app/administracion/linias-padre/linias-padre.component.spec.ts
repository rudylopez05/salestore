import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiniasPadreComponent } from './linias-padre.component';

describe('LiniasPadreComponent', () => {
  let component: LiniasPadreComponent;
  let fixture: ComponentFixture<LiniasPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiniasPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiniasPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
