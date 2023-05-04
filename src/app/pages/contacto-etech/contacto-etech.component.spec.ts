import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEtechComponent } from './contacto-etech.component';

describe('ContactoEtechComponent', () => {
  let component: ContactoEtechComponent;
  let fixture: ComponentFixture<ContactoEtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoEtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
