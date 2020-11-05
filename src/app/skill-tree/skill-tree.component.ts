import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AUTO, Game, GameObjects, Time, Types } from 'phaser';
import { BattleTurnService } from '../battle-turn.service';

export interface SkillTree {
  _id: string,
  class: string,
  nodes: Array<Node>
}

export interface Node {
  _id: string,
  ability: Ability,
  type: NodeType,
  amount: number,
  augmentationType?: AugmentationType,
  cost: number,
  owned: boolean,
  sons: Array<Node>;
  x: number;
  y: number;
  clickedEmmiter?: EventEmitter<any>;
  locked: boolean;
}

export enum Ability {
  'attack' = 'Attack',
  'armor' = 'Armor',
  'health' = 'Health',
  'magic_resist' = 'Magic resist',
  'heal_factor' = 'Heal factor'
}

export enum NodeType {
  'attack' = 'Attack',
  'stat' = 'Stat'
}

export enum AugmentationType {
  'percentage' = 'percentage',
  'flat' = 'flat'
}

class MainScene extends Phaser.Scene {

  skillTree: SkillTree;

  constructor(skillTree: SkillTree) {
    super({ key: skillTree.class });
    this.skillTree = skillTree;
  }

  preload() {
    this.load.image('background', 'assets/skill-tree-background.jpg');
    this.load.image('node', 'assets/skill-node.png');
    this.load.image('lock', 'assets/lock.png');
    this.load.image('skill-description', 'assets/skill-tree-description.png');
  }

  create() {
    (<Phaser.Renderer.WebGL.WebGLRenderer>this.game.renderer).addPipeline('outline', new OutlinePipeline(this.game));

    const background = this.add.sprite(0, 0, 'background').setOrigin(0);

    for(let node of this.skillTree.nodes) {
      this.renderSkillTree(this.skillTree, node, null, node.sons);
    }
    
    background.setDisplaySize((this.game.config.width as number), (this.game.config.height as number));

  }

  renderSkillTree(skillTree: SkillTree, node: Node, parentNode?: Node, sons?: Array<Node>) {
    // Creation of the skill node
    const sprite = this.add.sprite(node.x, node.y, 'node').setOrigin(0).setInteractive( { useHandCursor: true  } );
    sprite.scale = 0.10;
    if(!node.owned) {
      sprite.setTint(0x6E7970);
    }
    sprite.setDepth(10);

    // Creation of the description background
    const description = this.add.sprite(node.x + 50, node.y - 30, 'skill-description').setOrigin(0);
    description.visible = false;
    description.setDepth(100);
    description.scale = 0.05;

    // Creation of the texts in the description
    const displayText = node.ability + ': '+node.amount+(node.augmentationType === AugmentationType.percentage ? '%' : '');
    const textDescription = this.add.text(node.x + 70, node.y - 22, displayText, {
      fontSize: '12px',
      fontFamily: 'Arial',
      color: 'black',
      align: 'center'
    }).setOrigin(0);
    const textCost = this.add.text(node.x + 70, node.y - 8, 'Cost: '+node.cost, {
      fontSize: '12px',
      fontFamily: 'Arial',
      color: 'black',
      align: 'center'
    }).setOrigin(0);
    textDescription.setDepth(1000);
    textCost.setDepth(1000);
    textDescription.visible = false;
    textCost.visible = false;

    // Connection with parent node
    if(parentNode) {
      const line = this.add.line(null, null, node.x + 30, node.y + 25, parentNode.x + 30, parentNode.y + 25, 0xcdcdcd).setOrigin(0);
    }

    let lock;
    // Show nodes locked
    if(node.locked) {
      lock = this.add.sprite(node.x + 25, node.y + 30, 'lock').setOrigin(0);
      lock.scale = 0.1;
      lock.setDepth(100);
    }

    // Node events
    node.clickedEmmiter = new EventEmitter();
    sprite.on('pointerover', () => {
      sprite.scale = 0.15;
      sprite.setOrigin(0.15, 0.15);
      if(lock) {
        lock.scale = 0.15;
        lock.setOrigin(-0.10  , -0.10 );
      }
      description.visible = true;
      textDescription.visible = true;
      textCost.visible = true;
    });
    sprite.on('pointerout', () => {
      sprite.scale = 0.10;
      sprite.setOrigin(0);
      if(lock) {
        lock.scale = 0.10;
        lock.setOrigin(0, 0);
      }
      description.visible = false;
      textDescription.visible = false;
      textCost.visible = false;
    });
    sprite.on('pointerup', () => {
      if(!node.locked && (!sons || !sons.length || !sons.find((currentSon) => currentSon.owned))) {
        if(!node.owned && parentNode) {
          if(!parentNode.owned) {
            return;
          }
        }
        node.owned = !node.owned;
        if(node.owned) {
          sprite.clearTint();
        } else {
          sprite.setTint(0x6E7970);
        }
        node.clickedEmmiter.emit(node);
      }
    });
    if(node.sons && node.sons.length) {
      for(let son of node.sons) {
        this.renderSkillTree(skillTree, son, node, son.sons);
      }
      return;
    } else {
      return;
    }
  }
}

class OutlinePipeline extends Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline {
  constructor(game: Phaser.Game) {
      let config = {
          game: game,
          renderer: game.renderer,
          fragShader: `
          precision mediump float;
          uniform sampler2D uMainSampler;
          varying vec2 outTexCoord;
          void main(void) {
              vec4 color = texture2D(uMainSampler, outTexCoord);
              vec4 colorU = texture2D(uMainSampler, vec2(outTexCoord.x, outTexCoord.y - 0.001));
              vec4 colorD = texture2D(uMainSampler, vec2(outTexCoord.x, outTexCoord.y + 0.001));
              vec4 colorL = texture2D(uMainSampler, vec2(outTexCoord.x + 0.001, outTexCoord.y));
              vec4 colorR = texture2D(uMainSampler, vec2(outTexCoord.x - 0.001, outTexCoord.y));
              
              gl_FragColor = color;
              
              if (color.a == 0.0 && (colorU.a != 0.0 || colorD.a != 0.0 || colorL.a != 0.0 || colorR.a != 0.0)  ) {
                  gl_FragColor = vec4(1.0, 0, 0, 1.0);
              }
          }`};
      super(config);
  }
}


@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.css']
})
export class SkillTreeComponent implements OnInit, OnChanges {
  @Input() action: { action: string, actionNumber: number };
  @Input() skillTree: SkillTree;
  @Input() render: boolean;
  @Output() targetChosen: EventEmitter<{
    node: Node,
    tree_id: string
  }> = new EventEmitter();
  targetId: string;
  phaserGame: Game;
  config: Types.Core.GameConfig;
  scene: MainScene;

  constructor(private turnService: BattleTurnService) {
  }

  ngOnInit(): void {

    setTimeout(() => {
      if(this.render) {
        this.initGame();
      }
    }, 1000)
    
  }

  initGame() {
    console.log('rendering skill tree: '+this.skillTree.class);
    
    this.scene = new MainScene(this.skillTree);
    this.config = {
      width:  (5 * window.innerWidth / 6) - 20,
      height: window.innerHeight - 300,
      type: AUTO,
      parent: 'tree-' + this.skillTree.class,
      scene: this.scene
    };
    this.phaserGame = new Game(this.config);
    setTimeout(() => {
      for(let node of this.scene.skillTree.nodes) {
        this.subscribeToNodes(this.scene.skillTree, node);
      }
    }, 500);

  }

  subscribeToNodes(skillTree: SkillTree, node: Node) {
    node.clickedEmmiter.subscribe((nodeEmmitted) => {
      this.targetChosen.emit({tree_id: skillTree._id, node: nodeEmmitted});
    });
    if(node.sons && node.sons.length) {
      for(let son of node.sons) {
        this.subscribeToNodes(skillTree, son);
      }
    }
    return;
  }

  ngOnChanges(changes: SimpleChanges) {  
    if(this.render && changes.render.previousValue === false) {
      this.ngOnInit();
    } else {
      if(this.phaserGame) {
        this.phaserGame.destroy(true);
        this.phaserGame = null;
      }
    }
  }



}
