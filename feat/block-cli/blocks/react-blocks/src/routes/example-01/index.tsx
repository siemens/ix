import { IxEventList, IxEventListItem, IxInput } from '@siemens/ix-react';
import { useState, useMemo } from 'react';
import styles from './example.module.css';

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

export default function ExamplePattern() {
  const [searchQuery, setSearchQuery] = useState('');

  // Full text search across all event properties
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) {
      return events;
    }

    const query = searchQuery.toLowerCase();
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.date.toLowerCase().includes(query) ||
        event.severity.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <div className={styles.Container}>
      <div className={styles.SearchWrapper}>
        <IxInput
          value={searchQuery}
          onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
          placeholder="Search events..."
          aria-label="Search events by title, description, date, or severity"
        />
      </div>

      <div
        className={styles.EventListWrapper}
        role="region"
        aria-live="polite"
        aria-label={`${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''} found`}
      >
        {filteredEvents.length > 0 ? (
          <IxEventList itemHeight="L">
            {filteredEvents.map((event) => (
              <IxEventListItem
                key={event.id}
                itemColor={`color-${event.severity}`}
              >
                <div className={styles.EventItem}>
                  <strong className={styles.EventTitle}>{event.title}</strong>
                  <p className={styles.EventDescription}>{event.description}</p>
                  <small className={styles.EventDate}>{event.date}</small>
                </div>
              </IxEventListItem>
            ))}
          </IxEventList>
        ) : (
          <div className={styles.EmptyState}>
            No events found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
