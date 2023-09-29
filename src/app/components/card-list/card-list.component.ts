import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  books: Book[] = []
  constructor(private dataServ: DataService) { }


  ngOnInit(): void {
    this.dataServ.getAllBooks().subscribe(bookArray => {
      this.books = bookArray;
      console.log(bookArray);
      
    });

  }

  

}
