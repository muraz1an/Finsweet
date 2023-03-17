import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Autor } from 'src/app/models/autors';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit{
idget: number = 1
btnText: string = ''
forms: boolean = false
i:number = 1
autorlist: Autor[] = [];
form: FormGroup = new FormGroup({});
displayedColumns: string[] = [ 'Name', 'Proffecion', 'Image' , 'Action'];
Xtotal: number = 1
 
constructor(private request: RequestService,
            public fb: FormBuilder
  ){}

  ngOnInit(): void {
    // this.setthis()
    this.form = this.fb.group({
      name: ['',Validators.required],
      proffesion: ['',Validators.required],
      img: ['']
    })

    this.setAutors()
  }
  add(){
    this.forms = !this.forms
    this.btnText = 'ADD'
    this.form.patchValue({
      name: '',
      proffesion: '',
      img: ''
    })
  }


  edit(element: Autor) {
    this.forms = !this.forms
    this.form.patchValue({
      name: element.name,
      proffesion: element.proffesion,
      img: element.img
    })
    this.idget = element.id
    this.btnText = 'Edit';
  }
  putDatas(){
    if(this.btnText == 'ADD'){   
      if(confirm('Do your really want to add new Autor?')){
        this.request.postData<Autor>(environment.allAutors.get , this.form.value).subscribe(()=>{
          this.setAutors()
          this.forms = !this.forms
        })
      }
    }
    else if(this.btnText == 'Edit'){
        let obj: Autor = {
          name: this.form.get('name')?.value,
          proffesion: this.form.get('proffesion')?.value,
          img: this.form.get('img')?.value,
          id: this.idget
        }
        if(confirm('Do you really want to confirm the changes?')){
          this.request.putData<Autor>(`${environment.allAutors.get}/${obj.id}`, obj).subscribe((item) => {
            
            this.setAutors()
            this.forms = !this.forms
          })
        }
    }
    
  }
  deleteItem (id:number) {
    if(confirm('Do you really want to delete this item?')){
      this.request.deleteData(`${environment.allAutors.get}/${id}`).subscribe(() => {
          this.setAutors()
      }, (e) => {
        console.log(e)
      })
    }
  }
  setAutors(){
    this.request.getAdminDatas<Autor[]>(environment.allAutors.get + `?_page=${this.i}&_limit=4`).subscribe((item)=> {
      if(item.body !== null) {
        this.autorlist = item.body
        this.Xtotal = Number(item.headers.get('X-Total-Count'))
      }

    })
  }

  nextPage(){
    if(this.i < this.Xtotal/4){
      ++this.i
      this.setAutors() 
      console.log(this.autorlist);
    }else {
      
    }   
  }
  prewPage(){
    if(this.i > 1){
      --this.i
     this.setAutors()
    }
  }
}
