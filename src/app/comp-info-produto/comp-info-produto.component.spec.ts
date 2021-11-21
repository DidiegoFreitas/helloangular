import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInfoProdutoComponent } from './comp-info-produto.component';

describe('CompInfoProdutoComponent', () => {
  let component: CompInfoProdutoComponent;
  let fixture: ComponentFixture<CompInfoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInfoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInfoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
