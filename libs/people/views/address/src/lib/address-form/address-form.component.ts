import { Address } from '@alten/people/data/address';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'alten-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnChanges {
  @Input() public address?: Address;
  @Output()
  public readonly submitForm: EventEmitter<Address> = new EventEmitter();

  public readonly form: FormGroup;

  public get cityControl(): FormGroup {
    return <FormGroup>this.form.get('city');
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      id: [undefined],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      city: fb.group({
        name: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      }),
    });
  }

  public ngOnChanges(): void {
    if (this.address) {
      this.form.patchValue(this.address);
    } else {
      this.form.reset();
    }
  }

  public save(): void {
    if (this.form.valid) {
      this.submitForm.next(this.form.value);
    }
  }
}
