import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOComponent } from './module-o.component';

describe('ModuleOComponent', () => {
  let component: ModuleOComponent;
  let fixture: ComponentFixture<ModuleOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
