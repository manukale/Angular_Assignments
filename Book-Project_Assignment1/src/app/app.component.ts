import { Component } from '@angular/core';
import { Book } from './model/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book
  data : Book[]

  constructor() {
     this.books= new Book()
     this.data=[]
  }

  addBook(bookAddForm:any){
    console.log(bookAddForm)
    this.data.push(this.books);
    this.books = new Book()
  }

  deleteBook(index : number){
this.data.splice(index,1)
  }
}
