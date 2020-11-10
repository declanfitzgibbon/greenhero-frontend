import { Component, OnInit } from '@angular/core';
import { Node, Ability, AugmentationType, NodeType } from 'src/app/models/node';
import { SkillTree } from 'src/app/models/skillTree';
import { UserService } from 'src/app/services/user.service';
import { SkillTreeService } from 'src/app/services/skill-tree.service';

@Component({
  selector: 'app-skill-tree-dashboard',
  templateUrl: './skill-tree-dashboard.component.html',
  styleUrls: ['./skill-tree-dashboard.component.css']
})
export class SkillTreeDashboardComponent implements OnInit {

  classess: Array<{
    name: string,
    render: boolean,
    skillTree: SkillTree
  }> = [];

  actions: Array<{ name: string, code: string, disabled: boolean }>;

  nodesChosen: Array<{node: Node, tree_id: string}>;

  totalCoinsToSpend: number;
  totalCoinsHad: number;
  
  constructor(private coinService: UserService, private skillTreeService: SkillTreeService) { }

  async ngOnInit() {
    this.nodesChosen = [];
    this.actions = [
      {
        code: "confirm",
        name: "Confirm",
        disabled: true
      }
    ];
    this.classess = await this.skillTreeService.getTrees();
    this.totalCoinsHad = this.coinService.getCurrentCoinAmount();
    this.coinService.getCoinsEmitter().subscribe((amount) => this.totalCoinsHad = amount);
  }

  changeRender(index: number) {
    this.nodesChosen = [];
    this.totalCoinsToSpend = 0;
    this.resetTrees();
    for( let i = 0; i < this.classess.length; i++) {
      if(i === index){
        this.classess[i].render = true;
      } else {
        this.classess[i].render = false;
      }
    }
    
  }

  reRender(index: number) {
    this.classess[index].render = false;
    setTimeout(() => this.classess[index].render = true, 150);
  }

  nodeClicked(emition: {tree_id: string, node: Node}) {
    if(emition.node.owned) {
      this.nodesChosen.push(emition);
    }
    else {
      this.nodesChosen.splice(this.nodesChosen.findIndex((node)=> node.node._id === emition.node._id), 1);
    }

    const action = this.actions.find((action) => action.code === 'confirm');
    
    if(this.nodesChosen.length) {
      this.totalCoinsToSpend = 0;
      for(let node of this.nodesChosen) {
        this.totalCoinsToSpend += node.node.cost;
      }
      if(this.totalCoinsHad < this.totalCoinsToSpend) {
        action.disabled = true;
      } else {
        action.disabled = false;
      }
    } else {
      this.totalCoinsToSpend = null;
      action.disabled = true;
    }
  }

  actionDone(action: { name: string, code: string, disabled: boolean }) {
    if(action.code === 'confirm' && !action.disabled) {
      for(let node of this.nodesChosen) {
        const found = this.findNode(this.classess.find((tree) => tree.skillTree._id === node.tree_id).skillTree, node.node._id).locked = true;
      }
      this.coinService.substractCoins(this.totalCoinsToSpend);
      this.totalCoinsToSpend = null;
      const treeIndex = this.classess.findIndex((tree) => tree.skillTree._id === this.nodesChosen[0].tree_id);
      this.nodesChosen = [];
      this.reRender(treeIndex);
      this.actions.find((oa) => oa.code === action.code).disabled = true;
    }
  }

  resetTrees() {
    for(let tree of this.classess) {
      for(let son of tree.skillTree.nodes) {
        this.resetTree(son);
      }
    }
  }

  resetTree(node: Node) {
    node.owned = node.locked;
    for(let son of node.sons) {
      this.resetTree(son);
    }
  }
  
  findNode(skillTree: SkillTree, _id: string, currentNode: Node = null): Node {
    if(!currentNode) {
      let node = skillTree.nodes.find((node) => node._id === _id);
      if(node) {
        return node;
      }
      let searchedIndex = -1;
      while(!node) {
        searchedIndex++;
        node = this.findNode(skillTree, _id, node[searchedIndex]);
      }
      return node;
    } else {
      let node = currentNode.sons.find((node) => node._id === _id);
      if(node) {
        return node;
      }
      let searchedIndex = -1;
      while(!node) {
        searchedIndex++;
        node = this.findNode(skillTree, _id, node[searchedIndex]);
      }
      return node;
    }
    
  }

}
