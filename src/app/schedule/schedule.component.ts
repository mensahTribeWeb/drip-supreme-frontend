import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  schedule = [
    { date: '2025-04-01', time: '10:00 AM', teams: 'Team A vs Team B' },
    { date: '2025-04-02', time: '12:00 PM', teams: 'Team C vs Team D' },
    { date: '2025-04-03', time: '03:00 PM', teams: 'Team E vs Team F' },
  ];
}
