import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AdminAnnounce } from '../../../models/adminAnnounce';
import { AdminAnnounceService } from '../../../services/admin-announce.service';

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

  @Input() title: string = "New messages";

  feed: Array<AdminAnnounce>;

  loading: boolean;

  constructor(private adminAnnounceService: AdminAnnounceService) { }

  async ngOnInit() {

    this.loading = true;

    this.feed = await this.adminAnnounceService.getFeed();

    this.loading = false;
  }

}
