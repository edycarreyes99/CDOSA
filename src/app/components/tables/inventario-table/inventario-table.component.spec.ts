import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioTableComponent } from './inventario-table.component';

describe('InventarioTableComponent', () => {
  let component: InventarioTableComponent;
  let fixture: ComponentFixture<InventarioTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
