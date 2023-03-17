import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllPosts } from 'src/app/models/all_posts';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit{
  idget: number = 1
  btnText: string = ''
  forms: boolean = false
  i:number = 1
  myPost: AllPosts[] = [];
  form: FormGroup = new FormGroup({});
  displayedColumns: string[] = [ 'img', 'title','type','autor','date', 'descrip' , 'Action'];
  Xtotal: number = 1
   
  constructor(private request: RequestService,
              public fb: FormBuilder
    ){}
  
    ngOnInit(): void {

      this.form = this.fb.group({
        img: [''],
        type: ['',Validators.required],
        title: ['',Validators.required],
        descrip: ['',Validators.required],
        autor: ['', Validators.required],
        date: ['', Validators.required]
      })
      
      this.setmyPost()
      console.log(this.myPost);
      
    }
    add(){
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
        autor:element.autor,
        date:element.autordate,
        descrip: element.descrip
      })
      this.idget = element.id
      this.btnText = 'Edit';
    }
    putDatas(){
      if(this.btnText == 'ADD'){   
        if(confirm('Do your really want to add new myPost?')){
          this.request.postData<AllPosts>(environment.myPost.get , this.form.value).subscribe(()=>{
            this.setmyPost()
            this.forms = !this.forms
          })
        }
      }
      else if(this.btnText == 'Edit'){
          let obj: AllPosts = {
            img: this.form.get('img')?.value,
            title: this.form.get('title')?.value,
            autor: this.form.get('autor')?.value,
            autordate: this.form.get('date')?.value,
            descrip: this.form.get('descrip')?.value,
            id: this.idget,
            type: this.form.get('type')?.value
          }
          if(confirm('Do you really want to confirm the changes?')){
            this.request.putData<AllPosts>(`${environment.myPost.get}/${obj.id}`, obj).subscribe(() => {
              this.setmyPost()
              this.forms = !this.forms
            })
          }
      }
      
    }
    deleteItem (id:number) {
      if(confirm('Do you really want to delete this item?')){
        this.request.deleteData(`${environment.myPost.get}/${id}`).subscribe(() => {
            this.setmyPost()
        }, (e) => {
          console.log(e)
        })
      }
    }
    setmyPost(){
      this.request.getAdminDatas<AllPosts[]>(environment.myPost.get + `?_page=${this.i}&_limit=4`).subscribe((item)=> {
        if(item.body !== null) {
          this.myPost = item.body
          this.Xtotal = Number(item.headers.get('X-Total-Count'))
        }
  
      })
    }
  
    nextPage(){
      if(this.i < this.Xtotal/4){
        ++this.i
        this.setmyPost() 
      }
      // else {
        
      // }   
    }
    prewPage(){
      if(this.i > 1){
        --this.i
       this.setmyPost()
      }
    }
  
}