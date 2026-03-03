import { Component } from '@angular/core';
import { IxEventList, IxEventListItem, IxInput } from '@siemens/ix-angular/standalone';

// Sample event data
const events = [
  {
    id: 1,
    title: 'System Maintenance',
    description: 'Scheduled maintenance for database servers',
    date: '2026-01-28 14:00',
    severity: 'warning',
  },
  {
    id: 2,
    title: 'Security Update',
    description: 'Critical security patch deployment completed',
    date: '2026-01-27 09:30',
    severity: 'info',
  },
  {
    id: 3,
    title: 'Backup Failed',
    description: 'Nightly backup process encountered an error',
    date: '2026-01-26 03:15',
    severity: 'alarm',
  },
  {
    id: 4,
    title: 'New User Registration',
    description: 'User account created successfully for john.doe@example.com',
    date: '2026-01-25 11:20',
    severity: 'success',
  },
  {
    id: 5,
    title: 'Performance Alert',
    description: 'High CPU usage detected on production server',
    date: '2026-01-24 16:45',
    severity: 'warning',
  },
  {
    id: 6,
    title: 'Data Migration',
    description: 'Customer data migration to new infrastructure completed',
    date: '2026-01-23 22:00',
    severity: 'success',
  },
];

@Component({
  selector: 'example-01',
  imports: [IxEventList, IxEventListItem, IxInput],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class Example {
  searchQuery = '';
  events = events;

  get filteredEvents() {
    if (!this.searchQuery.trim()) {
      return this.events;
    }

    const query = this.searchQuery.toLowerCase();
    return this.events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.date.toLowerCase().includes(query) ||
        event.severity.toLowerCase().includes(query),
    );
  }

  onSearchInput(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }
}
