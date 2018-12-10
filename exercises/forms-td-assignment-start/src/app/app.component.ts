import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  @ViewChild('form') form: NgForm;
  formData = {
    email: '',
    subscription: '',
    password: ''
  };
  showData = false;

  onSubmit() {
    this.formData.email = this.form.value.email;
    this.formData.subscription = this.form.value.subscription;
    this.formData.password = this.form.value.password;

    this.form.resetForm();
    this.showData = true;
  }
}
