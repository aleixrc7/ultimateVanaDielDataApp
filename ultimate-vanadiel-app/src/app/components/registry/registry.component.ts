import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {

  constructor(private formBuilder: FormBuilder) { }

  registerForm: FormGroup = this.formBuilder.group({
    fullName: [, { validators: [Validators.required], updateOn: "change" }],
    email: [
      , {
        validators: [Validators.required, Validators.email]
        , updateOn: "change",
      }],
    password: [, { validators: [Validators.required], updateOn: "change" }],
    phone: [, { updateOn: "change" }],
    role: ['jobSeeker', { validators: [Validators.required], updateOn: 'change' }]
  });

  public submitForm(): void {

  }

  // TODO https://medium.com/angular-in-depth/angular-forms-reactive-form-including-angular-material-and-custom-validator-9ef324cc3b08
}
