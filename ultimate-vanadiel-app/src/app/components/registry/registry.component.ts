import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {

  inputTouched = false; // Track the focus state

  constructor(private formBuilder: FormBuilder) { }

  registerForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
  });

  public submitForm(): void {

  }

  // Set the input as touched when it's focused
  public setTouched() {
    this.inputTouched = true;
  }

  //TODO mirar https://stackoverflow.com/questions/54349574/angular-material-mat-error-shows-only-when-from-control-was-touched
}
