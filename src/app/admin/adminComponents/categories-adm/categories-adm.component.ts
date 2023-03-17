import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-categories-adm',
  templateUrl: './categories-adm.component.html',
  styleUrls: ['./categories-adm.component.css']
})
export class CategoriesAdmComponent  implements OnInit{
  idget: number = 1
  btnText: string = ''
  forms: boolean = false
  i:number = 1
  categs: Categories[] = [];
  form: FormGroup = new FormGroup({});
  displayedColumns: string[] = [ 'icon', 'title', 'descrip' , 'Action'];
  Xtotal: number = 1
   
  constructor(private request: RequestService,
              public fb: FormBuilder
    ){}
  
    ngOnInit(): void {

      this.form = this.fb.group({
        icon: ['',Validators.required],
        title: ['',Validators.required],
        descrip: ['']
      })
      
      this.setCategories()
      console.log(this.categs);
      
    }
    add(){
      this.forms = !this.forms
      this.btnText = 'ADD'
      this.form.patchValue({
        icon: '',
        title: '',
        descrip: ''
      })
    }
  
  
    edit(element: Categories) {
      this.forms = !this.forms
      this.form.patchValue({
        icon: element.icon,
        title: element.title,
        descrip: element.descrip
      })
      this.idget = element.id
      this.btnText = 'Edit';
    }
    putDatas(){
      if(this.btnText == 'ADD'){   
        if(confirm('Do your really want to add new Categories?')){
          this.request.postData<Categories>(environment.categs.get , this.form.value).subscribe(()=>{
            this.setCategories()
            this.forms = !this.forms
          })
        }
      }
      else if(this.btnText == 'Edit'){
          let obj: Categories = {
            icon: this.form.get('icon')?.value,
            title: this.form.get('title')?.value,
            descrip: this.form.get('descrip')?.value,
            id: this.idget
          }
          if(confirm('Do you really want to confirm the changes?')){
            this.request.putData<Categories>(`${environment.categs.get}/${obj.id}`, obj).subscribe((item) => {
              
              this.setCategories()
              this.forms = !this.forms
            })
          }
      }
      
    }
    deleteItem (id:number) {
      if(confirm('Do you really want to delete this item?')){
        this.request.deleteData(`${environment.categs.get}/${id}`).subscribe(() => {
            this.setCategories()
        }, (e) => {
          console.log(e)
        })
      }
    }
    setCategories(){
      this.request.getAdminDatas<Categories[]>(environment.categs.get + `?_page=${this.i}&_limit=4`).subscribe((item)=> {
        if(item.body !== null) {
          this.categs = item.body
          console.log(this.categs);
          
          this.Xtotal = Number(item.headers.get('X-Total-Count'))
        }
  
      })
    }
  
    nextPage(){
      if(this.i < this.Xtotal/4){
        ++this.i
        this.setCategories() 
      }
      // else {
        
      // }   
    }
    prewPage(){
      if(this.i > 1){
        --this.i
       this.setCategories()
      }
    }
  
}


