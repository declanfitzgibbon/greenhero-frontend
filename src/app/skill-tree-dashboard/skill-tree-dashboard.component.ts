import { Component, OnInit } from '@angular/core';
import { Ability, AugmentationType, NodeType, SkillTree, Node} from '../skill-tree/skill-tree.component';
import { UserService } from '../user.service';

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
  }> = [
    {
      name: "Mage",
      render: true,
      skillTree: {
        _id: "1",
        class: "Mage",
        nodes: [
          {
            _id: "1",
            ability: Ability.attack,
            amount: 15,
            sons: [{
              _id: "2",
              ability: Ability.attack,
              amount: 15,
              type: NodeType.stat,
              x: 150,
              y: 180,
              augmentationType: AugmentationType.percentage,
              cost: 200,
              owned: false,
              sons: [{
                _id: "3",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 250,
                y: 180,
                sons: [{
                  _id: "4",
                  ability: Ability.attack,
                  amount: 15,
                  type: NodeType.stat,
                  x: 350,
                  y: 180,
                  sons: [],
                  augmentationType: AugmentationType.percentage,
                  cost: 200,
                  owned: false,
                  locked: false
                }],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: false,
                locked: false
              }],
              locked: false
            }],
            type: NodeType.stat,
            x: 50,
            y: 180,
            augmentationType: AugmentationType.percentage,
            cost: 200,
            owned: false,
            locked: false
          }
        ]
      }
    },
    {
      name: "Priest",
      render: false,
      skillTree: {
        _id: "2",
        class: "Priest",
        nodes: [
          {
            _id: "5",
            ability: Ability.attack,
            amount: 15,
            sons: [{
              _id: "6",
              ability: Ability.attack,
              amount: 15,
              type: NodeType.stat,
              x: 150,
              y: 180,
              augmentationType: AugmentationType.percentage,
              cost: 200,
              owned: false,
              sons: [{
                _id: "7",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 250,
                y: 260,
                sons: [],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: false,
                locked: false
              }, {
                _id: "8",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 250,
                y: 100,
                sons: [],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: false,
                locked: false
              }],
              locked: false
            }],
            type: NodeType.stat,
            x: 50,
            y: 180,
            augmentationType: AugmentationType.percentage,
            cost: 200,
            owned: false,
            locked: false
          }
        ]
      }
    }
  ];

  actions: Array<{ name: string, code: string, disabled: boolean }>;

  nodesChosen: Array<{node: Node, tree_id: string}>;

  totalCoinsToSpend: number;
  totalCoinsHad: number;
  
  constructor(private coinService: UserService) { }

  ngOnInit(): void {
    this.nodesChosen = [];
    this.actions = [
      {
        code: "confirm",
        name: "Confirm",
        disabled: true
      }
    ];
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
