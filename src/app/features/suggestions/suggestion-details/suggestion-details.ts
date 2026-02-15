import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './suggestion-details.html',
  styleUrls: ['./suggestion-details.css']
})
export class SuggestionDetailsComponent implements OnInit {

  suggestionId!: number;

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Renforcer les liens entre les membres.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Motiver les employés.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l’interface utilisateur',
      description: 'Refonte complète.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  suggestion?: Suggestion;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.suggestionId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.suggestion = this.suggestions.find(
      s => s.id === this.suggestionId
    );

  }

}
