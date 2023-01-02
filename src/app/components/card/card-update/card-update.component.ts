import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.scss']
})
export class CardUpdateComponent implements OnInit {

  card: Card;

  constructor(private cardService: CardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cardService.readById(String(id)).subscribe((card) => {
      this.card = card
    })

  }

  updateCard(): void {

    if (this.card.attack > 10) {
      return this.cardService.showMessage('O nível de ataque informado foi excedido!')
    }

    if (this.card.defense > 10) {
      return this.cardService.showMessage('O nível de defesa informado foi excedido!')
    }

    if (!this.card.name || !this.card.type || !this.card.level ||
      !this.card.description || !this.card.defense || !this.card.class || !this.card.avatarUrl || !this.card.attack) {
      return this.cardService.showMessage('Preencha todas as informações para salvar!')

    }
    this.cardService.update(this.card).subscribe(() => {
      this.cardService.showMessage('Carta atualizada com sucesso!');
      this.router.navigate(['/manager']);
    })
  }

  deleteCard(): void {
    this.cardService.delete(String(this.card.id)).subscribe(() => {
      this.cardService.showMessage('Carta removida com sucesso!');
      this.router.navigate(['/manager']);

    })
  }

  cancel(): void {
    this.router.navigate(['/manager'])
  }



}
