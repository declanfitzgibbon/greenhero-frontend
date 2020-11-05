import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-applications-dialog',
  templateUrl: './event-applications-dialog.component.html',
  styleUrls: ['./event-applications-dialog.component.css']
})
export class EventApplicationsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventApplicationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
