/*
RENIEL PAUL BUNAG
*/
import { NgForm, NgModel, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}



  display(errors: ValidationErrors) {
    let err = '';
    if (errors) {
      errors.forEach((element) => {
        switch (element.error) {
          case 'required':
            err += element.field + ' is ' + element.error + '\n';
            break;
        }
      });
    }
    return err;
  }

  validate(myForm: NgForm) {
    let error: ValidationErrors = [];
    const controller = myForm.control;
    Object.keys(controller).forEach((key) => {
      const valid: ValidationErrors = controller[key].errors;
      if (valid) {
        Object.keys(valid).forEach((err) => {
          error.push({
            field: key,
            error: err,
            value: valid[err],
          });
        });
      }
    });

    const errorerr = this.display(error);
    if (error.length != 0) {
      alert("All fields are required!");
    } else {
      alert('Success');
    }
  }
}
