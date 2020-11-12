import { Injectable } from '@angular/core';
import { Ability, AugmentationType, NodeType } from '../models/node';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService {

  constructor(private http: HttpClient) { }

  async getTrees() {
    return (await this.http.get<any>('http://localhost:8080/SkillTree/5fa09a8ed506ec2913bd62e1').toPromise())
  }
}
