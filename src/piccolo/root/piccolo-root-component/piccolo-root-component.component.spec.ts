import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiccoloRootComponentComponent } from './piccolo-root-component.component';

describe('PiccoloRootComponentComponent', () => {
  let component: PiccoloRootComponentComponent;
  let fixture: ComponentFixture<PiccoloRootComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiccoloRootComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiccoloRootComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
