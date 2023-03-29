import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required,Validators.pattern(/^[0-9a-zA-Z\-_\.]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,4}$/)]],
      query: [''],
      massege: ['']
    })
  }

  Submit(){
    alert('Message has been sended successfully!')
    this.form.reset();
  }
}
