import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { AUTO, Game, GameObjects, Scene, Time, Types } from 'phaser';
import { BattleTurnService } from '../battle-turn.service';

class MainScene extends Phaser.Scene {

  blues: Array<BlueElf>;
  greens: Array<GreenElf>;
  idOfTurn: string;

  constructor(blues: Array<BlueElf>, greens: Array<GreenElf>, idOfTurn: string) {
    super({ key: 'main' });
    this.blues = blues;
    this.greens = greens;
    this.idOfTurn = idOfTurn;
  }
  preload() {
      //  The graphics used in this example were free downloads from https://craftpix.net
      //  Check out their excellent asset packs!
      this.load.image('background', 'assets/fairy-background-craft-pixel.png');
      this.load.atlas('elves', 'assets/elves-craft-pixel.png', 'assets/elves-craft-pixel.json');
  }
  create() {
    (<Phaser.Renderer.WebGL.WebGLRenderer>this.game.renderer).addPipeline('outline', new OutlinePipeline(this.game));

    this.anims.create({ key: 'greenIdle', frames: this.anims.generateFrameNames('elves', { prefix: 'green_idle_', start: 0, end: 4 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'blueIdle', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_idle_', start: 0, end: 4 }), frameRate: 10, repeat: -1 });

    this.anims.create({ key: 'greenAttack', frames: this.anims.generateFrameNames('elves', { prefix: 'green_attack_', start: 0, end: 5 }), frameRate: 10 });
    this.anims.create({ key: 'blueAttack', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_attack_', start: 0, end: 4 }), frameRate: 10 });

    this.anims.create({ key: 'greenDead', frames: this.anims.generateFrameNames('elves', { prefix: 'green_die_', start: 0, end: 4 }), frameRate: 6 });
    this.anims.create({ key: 'blueDead', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_die_', start: 0, end: 4 }), frameRate: 6 });
    
    this.anims.create({ key: 'greenHeal', frames: this.anims.generateFrameNames('elves', { prefix: 'green_attack_', start: 0, end: 4 }), frameRate: 10 });
    this.anims.create({ key: 'blueHeal', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_attack_', start: 0, end: 4 }), frameRate: 10 });

    const background = this.add.sprite(0, 0, 'background').setOrigin(0);
    
    background.setDisplaySize((this.game.config.width as number), (this.game.config.height as number));
    

    this.blues.push(new BlueElf(this, (2 * parseFloat(this.game.config.width as string)/10) - 30, 5 * parseFloat(this.game.config.height as string) / 6, [], '1', (this.idOfTurn === '1') as boolean));
    this.blues.push(new BlueElf(this, ((3 * parseFloat(this.game.config.width as string))/10) - 30, 5 * parseFloat(this.game.config.height as string) / 6, [], '2', (this.idOfTurn === '2') as boolean));
    this.blues.push(new BlueElf(this, ((4 * parseFloat(this.game.config.width as string))/10) - 30, 5 * parseFloat(this.game.config.height as string) / 6, [], '3', (this.idOfTurn === '3') as boolean));
    this.blues.push(new BlueElf(this, ((5 * parseFloat(this.game.config.width as string))/10) - 30, 5 * parseFloat(this.game.config.height as string) / 6, [], '4', (this.idOfTurn === '4') as boolean));

    // this.greens.push(new GreenElf(this, ((7 * parseFloat(this.game.config.width as string))/10) - 60, 5 * parseFloat(this.game.config.height as string) / 6, [], '5', (this.idOfTurn === '5') as boolean));
    this.greens.push(new GreenElf(this, ((10 * parseFloat(this.game.config.width as string))/10) - 60, 3.5 * parseFloat(this.game.config.height as string) / 6, [], '6', false));
    // this.greens.push(new GreenElf(this, ((9 * parseFloat(this.game.config.width as string))/10) - 60, 5 * parseFloat(this.game.config.height as string) / 6, [], '7', (this.idOfTurn === '7') as boolean));
    // this.greens.push(new GreenElf(this, ((10 * parseFloat(this.game.config.width as string))/10) - 60, 5 * parseFloat(this.game.config.height as string) / 6, [], '8', (this.idOfTurn === '8') as boolean));

    for(let elf of this.blues) {
      elf.updateEnemies(this.greens);
      elf.render();
    }

    for(let elf of this.greens) {
      elf.updateEnemies(this.blues);
      elf.render();
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

class HealthBar {
  bar: GameObjects.Graphics;
  text: GameObjects.Text;
  x: number;
  y: number;
  value: number;
  p: number;
  isSuper: boolean;

  constructor (scene: Scene, x: number, y: number, isSuper: boolean)
  {
      this.isSuper = isSuper;
      this.bar = new GameObjects.Graphics(scene);
      this.value = this.isSuper ? 1000 : Math.round(Math.random() * 100);
      this.text = new GameObjects.Text(scene, this.isSuper ? x + 45 : x + 20, y, this.isSuper ? "1000/1000" : "100/100", {
        fontSize: '14px',
        fontFamily: 'Arial',
        color: 'black',
        align: 'center'
      });
      this.x = x;
      this.y = y;
      this.p = this.isSuper ? 76/1000 : 76/100;

      this.draw();

      scene.add.existing(this.bar);
      scene.add.existing(this.text);
  }

  decrease (amount: number)
  {
      this.value -= amount;

      if (this.value < 0)
      {
          this.value = 0;
      }

      this.draw();

      return (this.value === 0);
  }
  
  increase (amount: number)
  {
      this.value += amount;
      this.value = this.value > 100 ? 100 : this.value;

      this.draw();
  }

  draw ()
  {
      this.bar.clear();

      this.text.text = this.isSuper ? this.value + '/1000' : this.value + '/100'

      //  BG
      this.bar.fillStyle(0x000000);
      this.bar.fillRect(this.x, this.y, this.isSuper ? 157 : 80, 16);

      //  Health

      this.bar.fillStyle(0xffffff);
      this.bar.fillRect(this.x + 2, this.y + 2, this.isSuper ? 152 : 76, 12);

      if (this.value < 30)
      {
          this.bar.fillStyle(0xff0000);
      }
      else
      {
          this.bar.fillStyle(0x00ff00);
      }

      var d = this.isSuper ? Math.floor(this.p * this.value * 2) : Math.floor(this.p * this.value);

      this.bar.fillRect(this.x + 2, this.y + 2, d, 12);
  }

}

class Missile extends GameObjects.Image {

  constructor (scene: Scene, frame: string)
  {
      super(scene, 0, 0, 'elves', frame);

      this.visible = false;
  }

}

class Elf extends GameObjects.Sprite {
  color: string;
  alive: boolean;
  hp: HealthBar;
  timer: Time.TimerEvent;
  missile: Missile;
  enemies: Array<Elf>;
  id: string;
  clickedEmmiter: EventEmitter<string>;
  mainScene: MainScene;
  isHighlighted: boolean;

  constructor (scene: MainScene, color: string, x: number, y: number, enemies: Array<Elf>, id: string, isHighlighted: boolean)
  {
      super(scene, x, y, null);

      this.isHighlighted = isHighlighted;
      this.mainScene = scene;
      this.color = color;
      

      this.setTexture('elves');
      this.setPosition(x, y);

      this.play(this.color + 'Idle');

      
      this.alive = true;
      
      var hx = this.color === 'green' ? 275 : 110;
      var hy = this.color === 'green' ? 230 : 110;
      
      this.hp = new HealthBar(scene, x - hx, y - hy, this.color === 'green');

      this.id = id; 
      
      this.enemies = enemies;
      this.clickedEmmiter = new EventEmitter();

      this.setDepth(1);

      this.setInteractive().on('pointerup', () => {
        this.clickedEmmiter.emit(this.id);
        this.resetPipeline();
        this.setTint(0xff0000);
      });
  }

  preUpdate (time: number, delta: number)
  {
      super.preUpdate(time, delta);
  }

  animComplete (animation: { key: string })
  {
      if (animation.key === this.color + 'Attack')
      {
          this.play(this.color + 'Idle');
      }
  }

  damage (amount: number)
  {
      if (this.hp.decrease(amount))
      {
          this.alive = false;

          this.play(this.color + 'Dead');
      }
  }
  
  restoreHealth (amount: number)
  {
      this.hp.increase(amount);
  }

  fire (target: Elf)
  {
      if (target && this.alive)
      {
          this.play(this.color + 'Attack');

          var offset = (this.color === 'blue') ? 20 : -20;
          var targetX = (this.color === 'blue') ? target.x - 250: target.x - 30;

          this.missile.setScale(2);
          this.missile.setPosition(this.x + offset, this.y + 20).setVisible(true);


          this.scene.tweens.add({
              targets: this.missile,
              x: targetX,
              ease: 'Linear',
              duration: 1000,
              onComplete: function (tween, targets) {
                  targets[0].setVisible(false);
              }
          });

          target.damage(8);

      }
  } 

  heal (target: Elf)
  {
      if (target && this.alive)
      {
          this.play(this.color + 'Heal');
          this.once('animationcomplete', () => this.play(this.color + 'Idle'))
          target.restoreHealth(8);

      }
  }

  updateEnemies(enemies: Array<Elf>) {
    this.enemies = enemies;
    this.mainScene.greens.forEach((elf) => {
      if (elf.id !== this.id) {
        elf.clickedEmmiter.subscribe((elf) => {
          this.clearTint();
          if(this.isHighlighted) {
            this.setPipeline("outline");
          }
        });
      }
    });
    this.mainScene.blues.forEach((elf) => {
      if (elf.id !== this.id) {
        elf.clickedEmmiter.subscribe((elf) => {
          this.clearTint();
          if(this.isHighlighted) {
            this.setPipeline("outline");
          }
        });
      }
    });
  }

  resetTarget() {
    this.clickedEmmiter.emit(null);
    this.clearTint();
  }

  setHighlighted(isHighlighted: boolean) {
    this.isHighlighted = isHighlighted;
    if(this.isHighlighted) {
      this.setPipeline("outline");
    } else {
      this.resetPipeline();
    }
  }

  render() {
    this.scene.add.existing(this);
    
    if(this.isHighlighted) {
      this.setPipeline("outline");
    }
    this.on('animationcomplete', this.animComplete, this);
  }

}

class BlueElf extends Elf {

  constructor (scene: MainScene, x: number, y: number, enemies: Array<Elf>, id: string, isHighlighted: boolean)
  {
      super(scene, 'blue', x, y, enemies, id, isHighlighted);

      this.missile = new Missile(scene, 'blue-missile');
      
      scene.add.existing(this.missile);
  }

}

class GreenElf extends Elf {

  constructor (scene: MainScene, x: number, y: number, enemies: Array<Elf>, id: string, isHighlighted: boolean)
  {
      super(scene, 'green', x, y, enemies, id, isHighlighted);

      this.setScale(3);

      this.missile = new Missile(scene, 'green-missile');
      this.missile.setScale(3);

      scene.add.existing(this.missile);

  }

}


@Component({
  selector: 'app-user-battle-canvas',
  templateUrl: './user-battle-canvas.component.html',
  styleUrls: ['./user-battle-canvas.component.css']
})
export class UserBattleCanvasComponent implements OnInit, OnChanges {
  @Input() turnId: string = '1';
  @Input() action: { action: string, actionNumber: number };
  @Output() targetChosen: EventEmitter<{
    chosen: boolean,
    friend: boolean
  }> = new EventEmitter();
  targetId: string;
  phaserGame: Game;
  config: Types.Core.GameConfig;
  scene: MainScene;
  load: any;
  anims: any;
  add: any;

  constructor(private turnService: BattleTurnService) {
    this.scene = new MainScene([], [], this.turnId);
    this.config = {
      width:  (5 * window.innerWidth / 6) - 20,
      height: window.innerHeight - 200,
      type: AUTO,
      parent: 'game',
      scene: this.scene
    };
   }

  ngOnInit(): void {


    this.turnService.turnChange.subscribe((value) => {
      this.turnId = value[0];
      this.scene.blues.forEach((elf) => {
        if(elf.id === this.turnId) {
          if(elf.alive) {
            elf.setHighlighted(true);
          } else {
            this.turnService.nextTurn();
          }
        } else {
          elf.setHighlighted(false);
        }
      });
    });

    this.initGame();
    
  }

  initGame() {
    this.phaserGame = new Game(this.config);

    setTimeout(() => {
      this.scene.greens.forEach((elf) => elf.clickedEmmiter.subscribe((id) => {
        if(id !== null) {
          this.targetId = id;
          this.targetChosen.emit({
            chosen: true,
            friend: false
          });
        }
      }));
      this.scene.blues.forEach((elf) => elf.clickedEmmiter.subscribe((id) => {
        if (id !== null) {
          this.targetId = id;
          this.targetChosen.emit({
            chosen: true,
            friend: true
          });
        }
      }));
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.action.currentValue) {
      if(this.action.action === "attack") {
        this.scene.blues.find((elf) => elf.id === this.turnId)
        .fire(
          this.scene.greens.find(
            (elf) => elf.id === this.targetId
          )
        );
        this.scene.greens[0].fire(this.scene.blues.find((elf) => elf.id === this.turnId));
      } else if (this.action.action === "heal") {
        this.scene.blues.find((elf) => elf.id === this.turnId)
        .heal(
          this.scene.blues.find(
            (elf) => elf.id === this.targetId
          )
        );
        this.scene.greens[0].fire(this.scene.blues.find((elf) => elf.id === this.turnId));
      }
      this.scene.blues.forEach((elf) => {elf.resetTarget()});
      this.scene.greens.forEach((elf) => {elf.resetTarget()});
    }
  }



}
