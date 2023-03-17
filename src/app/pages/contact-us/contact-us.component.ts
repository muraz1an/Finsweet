import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  constructor(public fb: FormBuilder){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      email: [],
      query: [],
      massege: []
    })
  }
}
