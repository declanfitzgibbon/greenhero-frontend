import { Injectable } from '@angular/core';
import { Ability, AugmentationType, NodeType } from '../models/node';
import { HttpClient } from '@angular/common/http';
import { SkillTree } from '../models/skillTree';
import { Node } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService {

  constructor(private http: HttpClient) { }

  async getTree(tree_id: string) {
    return (await this.http.get<SkillTree>('https://greenhero.herokuapp.com/SkillTree/'+encodeURIComponent(tree_id)).toPromise())
  }

  async updateNode(node: Node) {
    if(node.sons) {
      for(let i = 0; i < node.sons.length; i++) {
        node.sons[i] = (node.sons[i]._id as any);
      }
    }
    return (await this.http.put<any>('https://greenhero.herokuapp.com/Node', {
      ...node
    }).toPromise())
  }
}
