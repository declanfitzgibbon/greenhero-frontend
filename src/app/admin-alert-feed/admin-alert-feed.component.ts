import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];
@Component({
  selector: 'app-admin-alert-feed',
  templateUrl: './admin-alert-feed.component.html',
  styleUrls: ['./admin-alert-feed.component.css'],
  animations: [
    trigger('slideIn', [
      transition(
        ':enter', 
        [
          style({ height: 0, opacity: 0 }),
          animate('1s ease-out', 
                  style({ height: 64, opacity: 1 }))
        ]
      ),
    ]),
  ],
})
export class AdminAlertFeedComponent implements OnInit {

  @Input() title: string = "Feed";

  feed: Array<{
    icon: string;
    title: string;
    content: string;
  }>;

  loading: boolean;

  constructor() { }

  ngOnInit(): void {

    this.loading = true;

    this.feed = [{
      icon: '<i class="fas fa-exclamation"></i>',
      title: "System recommendation",
      content: "Lights are too bright"
    },
    {
      icon: '<i class="fas fa-exclamation"></i>',
      title: "System recommendation",
      content: "Lights are too bright"
    },
    {
      icon: '<i class="fas fa-exclamation"></i>',
      title: "System recommendation",
      content: "Lights are too bright"
    },
    {
      icon: '<i class="fas fa-exclamation"></i>',
      title: "System recommendation",
      content: "Lights are too bright"
    }];

    setInterval(() => {
      this.feed.unshift({
        icon: '<i class="fas fa-exclamation"></i>',
        title: "System recommendation",
        content: "Lights are too bright"
      });
    }, 1000);

    this.loading = false;
  }

}
