// ticket-table.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent {
  displayedColumns: string[] = ['ticketNo', 'description', 'createdDate', 'resolvedBy'];

  dataSource = [
    {
      ticketNo: 'INC1234',
      description: 'Access Issue',
      createdDate: new Date(2023, 8, 1),
      resolvedBy: 'John Doe'
    },
    {
      ticketNo: 'INC5678',
      description: 'Login Issue',
      createdDate: new Date(2023, 8, 2),
      resolvedBy: 'Jane Smith'
    },
    {
      ticketNo: 'INC2345',
      description: 'Create Access',
      createdDate: new Date(2023, 8, 3),
      resolvedBy: 'Alex Jones'
    },
    {
      ticketNo: 'INC6789',
      description: 'Remove Access',
      createdDate: new Date(2023, 8, 6),
      resolvedBy: 'James Smith'
    },
    {
      ticketNo: 'INC3456',
      description: 'Reset Password',
      createdDate: new Date(2023, 8, 4),
      resolvedBy: 'John Bratt'
    },
    {
      ticketNo: 'INC7890',
      description: 'Cannot Login',
      createdDate: new Date(2023, 8, 8),
      resolvedBy: 'Jason Bum'
    }
  ];
}
