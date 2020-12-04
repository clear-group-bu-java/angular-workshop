import { FormBuilder } from '@angular/forms';

import { AddressFormComponent } from './address-form.component';

describe('AddressFormComponent', () => {
  let component: AddressFormComponent;

  beforeEach(() => {
    component = new AddressFormComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
