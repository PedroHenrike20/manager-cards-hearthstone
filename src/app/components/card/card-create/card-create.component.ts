import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Router } from '@angular/router'
import { Card } from '../card.model';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  card: Card = {
    attack: 0,
    avatarUrl: '',
    class: '',
    defense: 0,
    description: '',
    level: 0,
    name: '',
    type: '',
  };

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {

  }

  crateCard(): void {

    if (this.card.attack > 10) {
      return this.cardService.showMessage('O nível de ataque informado foi excedido!')
    }

    if (this.card.defense > 10) {
      return this.cardService.showMessage('O nível de defesa informado foi excedido!')
    }

    console.log(this.card)

    if (!this.card.name || !this.card.type || !this.card.level ||
      !this.card.description || !this.card.defense || !this.card.class || !this.card.avatarUrl || !this.card.attack) {
      return this.cardService.showMessage('Preencha todas as informações para salvar!')

    }

    this.cardService.create(this.card).subscribe(() => {
      this.cardService.showMessage('Salvo com sucesso')
      this.cardService.read().subscribe((cards) => {
        const data = JSON.stringify(cards);
        localStorage.setItem('cards', data);
      })
      this.router.navigate(['/manager'])

    })
  }

  cancel(): void {
    this.router.navigate(['/manager'])
  }

  handleListCards(): void {
    this.router.navigate(['/manager'])
  }
}
