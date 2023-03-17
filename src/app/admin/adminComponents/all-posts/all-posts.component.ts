import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllPosts } from 'src/app/models/all_posts';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  idget: number = 1
  btnText: string = ''
  forms: boolean = false
  i: number = 1
  allposts: AllPosts[] = [];
  form: FormGroup = new FormGroup({});
  displayedColumns: string[] = ['img', 'title', 'type', 'autor', 'date', 'descrip', 'Action'];
  Xtotal: number = 1
  constructor(private request: RequestService,
    public fb: FormBuilder
  ) { }
  


  ngOnInit(): void {

    this.form = this.fb.group({
      img: [''],
      type: ['', Validators.required],
      title: ['', Validators.required],
      descrip: ['', Validators.required],
      autor: ['', Validators.required],
      date: ['', Validators.required]
    })

    this.setAllPosts()
    console.log(this.allposts);
  }
  add() {
    this.forms = !this.forms
    this.btnText = 'ADD'
    this.form.patchValue({
      img: '',
      title: '',
      descrip: '',
      autor: '',
      date: '',
      type: '',

    })
  }


  edit(element: AllPosts) {
    this.forms = !this.forms
    this.form.patchValue({
      img: element.img,
      type: element.type,
      title: element.title,
      autor: element.autor,
      date: element.autordate,
      descrip: element.descrip
    })
    this.idget = element.id
    this.btnText = 'Edit';
  }
  putDatas() {
    if (this.btnText == 'ADD') {
      if (confirm('Do your really want to add new AllPosts?')) {
        this.request.postData<AllPosts>(environment.postsall.get, this.form.value).subscribe(() => {
          this.setAllPosts()
          this.forms = !this.forms
        })
      }
    }
    else if (this.btnText == 'Edit') {
      let obj: AllPosts = {
        img: this.form.get('img')?.value,
        title: this.form.get('title')?.value,
        autor: this.form.get('autor')?.value,
        autordate: this.form.get('date')?.value,
        descrip: this.form.get('descrip')?.value,
        id: this.idget,
        type: this.form.get('type')?.value
      }
      if (confirm('Do you really want to confirm the changes?')) {
        this.request.putData<AllPosts>(`${environment.postsall.get}/${obj.id}`, obj).subscribe(() => {
          this.setAllPosts()
          this.forms = !this.forms
        })
      }
    }

  }
  deleteItem(id: number) {
    if (confirm('Do you really want to delete this item?')) {
      this.request.deleteData(`${environment.postsall.get}/${id}`).subscribe(() => {
        this.setAllPosts()
      }, (e) => {
        console.log(e)
      })
    }
  }
  setAllPosts() {
    this.request.getAdminDatas<AllPosts[]>(environment.postsall.get + `?_page=${this.i}&_limit=4`).subscribe((item) => {
      if (item.body !== null) {
        this.allposts = item.body
        this.Xtotal = Number(item.headers.get('X-Total-Count'))
      }

    })
  }

  nextPage() {
    if (this.i < this.Xtotal / 4) {
      ++this.i
      this.setAllPosts()
    }
    // else {

    // }   
  }
  prewPage() {
    if (this.i > 1) {
      --this.i
      this.setAllPosts()
    }
  }

}



