import { Component } from '@angular/core';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  private myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.maxLength(10)],
    });
  }

  public logForm() {
    console.log('form ',this.myForm.value);
  }
}
