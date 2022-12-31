import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Card } from '../card.model';
import { CardService } from '../card.service';


@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.scss']
})
export class CardReadComponent implements OnInit {

  cards: Card[] = [];
  typeFilter: string;
  filterValue: string;

  constructor(private route: Router, private cardService: CardService) { }


  ngOnInit(): void {
    this.cardService.read().subscribe((cards) => {
      this.cards = cards
    })

  }

  cleanFilter(): void {
    this.cardService.read().subscribe((cards) => {
      this.filterValue = '';
      this.typeFilter = '';
      this.cards = cards
    })
  }

  getCardsFilter(): void {
    if (!this.filterValue || !this.typeFilter) {
      return this.cardService.showMessage('Especifique as informações corretamente para filtrar')
    }
    console.log(this.filterValue);
    console.log(this.typeFilter);

    if (this.typeFilter === "name" || this.typeFilter === "id") {

      this.cardService.readByFilter(this.typeFilter, this.filterValue).subscribe((cards) => {
        console.log({ cards })
        this.cards = cards
      })
    } else {
      this.cardService.readByFilter(this.typeFilter, this.filterValue.toLowerCase()).subscribe((cards) => {
        console.log({ cards })
        this.cards = cards
      })

    }



  }

  handleCreateCard(): void {
    this.route.navigate(['/manager/card/create']);

  }
}
