import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
})
export class TeamsComponent {
  teams = [
    { name: 'Team A', city: 'City A' },
    { name: 'Team B', city: 'City B' },
    { name: 'Team C', city: 'City C' },
  ];
}
