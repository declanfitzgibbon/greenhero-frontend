import { Injectable } from '@angular/core';
import { AdminAnnounce } from '../models/adminAnnounce';

@Injectable({
  providedIn: 'root'
})
export class AdminAnnounceService {

  constructor() { }

  async getFeed(): Promise<Array<AdminAnnounce>> {
    return [{
      _id: "1",
      icon: '<i class="fas fa-exclamation"></i>',
      title: "UNDER CONSTRUCTION",
      content: "UNDER CONSTRUCTION"
    }];
  }
}
