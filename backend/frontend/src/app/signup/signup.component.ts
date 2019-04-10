import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {mongoService} from "../mongo.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(public formDetails: mongoService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        Username : new FormControl(),
        EmailID : new FormControl(),
        Password : new FormControl()
      });
  }
  onSubmit() {
    console.log(this.form.value),
      this.formDetails.signupDetails(this.form.value).subscribe(result => {
        console.log('login check point result - ', result);
      });
  }

}