import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

enum ProjectStatus {
  STABLE = 'Stable',
  CRITICAL = 'Critical',
  FINISHED = 'Finished'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectStatuses: string[];
  customForm: FormGroup;

  constructor() {
    this.projectStatuses = Object.keys(ProjectStatus).map(status => ProjectStatus[status]);
  }

  ngOnInit(): void {
    this.customForm = new FormGroup({
      'project-name': new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectName],
        CustomValidators.forbiddenProjectNameAlso),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'project-status': new FormControl(),
    });

    this.markFormGroupTouched(this.customForm);
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup): void {
    formGroup.markAsTouched();

    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onSubmit() {
    console.log(this.customForm);
  }
}
