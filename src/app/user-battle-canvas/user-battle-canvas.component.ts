import { Component, OnInit } from '@angular/core';
import { AUTO, Game, GameObjects, Scene, Time, Types } from 'phaser';

class MainScene extends Phaser.Scene {

  blues: Array<BlueElf>;
  greens: Array<GreenElf>;

  constructor(blues: Array<BlueElf>, greens: Array<GreenElf>) {
    super({ key: 'main' });
    this.blues = blues;
    this.greens = greens;
  }
  preload() {
      //  The graphics used in this example were free downloads from https://craftpix.net
      //  Check out their excellent asset packs!
      this.load.image('background', 'assets/fairy-background-craft-pixel.png');
      this.load.atlas('elves', 'assets/elves-craft-pixel.png', 'assets/elves-craft-pixel.json');
  }
  create() {
    this.anims.create({ key: 'greenIdle', frames: this.anims.generateFrameNames('elves', { prefix: 'green_idle_', start: 0, end: 4 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'blueIdle', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_idle_', start: 0, end: 4 }), frameRate: 10, repeat: -1 });

    this.anims.create({ key: 'greenAttack', frames: this.anims.generateFrameNames('elves', { prefix: 'green_attack_', start: 0, end: 5 }), frameRate: 10 });
    this.anims.create({ key: 'blueAttack', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_attack_', start: 0, end: 4 }), frameRate: 10 });

    this.anims.create({ key: 'greenDead', frames: this.anims.generateFrameNames('elves', { prefix: 'green_die_', start: 0, end: 4 }), frameRate: 6 });
    this.anims.create({ key: 'blueDead', frames: this.anims.generateFrameNames('elves', { prefix: 'blue_die_', start: 0, end: 4 }), frameRate: 6 });

    const background = this.add.sprite(0, 0, 'background').setOrigin(0);
    
    background.setDisplaySize((this.game.config.width as number), (this.game.config.height as number));

    this.blues.push(new BlueElf(this, window.innerWidth/10, 476, []));
    this.blues.push(new BlueElf(this, (2 * window.innerWidth)/10, 480, []));
    this.blues.push(new BlueElf(this, (3 * window.innerWidth)/10, 484, []));
    this.blues.push(new BlueElf(this, (4 * window.innerWidth)/10, 480, []));

    this.greens.push(new GreenElf(this, (6 * window.innerWidth)/10, 486, []));
    this.greens.push(new GreenElf(this, (7 * window.innerWidth)/10, 488, []));
    this.greens.push(new GreenElf(this, (8 * window.innerWidth)/10, 485, []));
    this.greens.push(new GreenElf(this, (9 * window.innerWidth)/10, 484, []));

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

class HealthBar {
  bar: GameObjects.Graphics;
  x: number;
  y: number;
  value: number;
  p: number;

  constructor (scene: Scene, x: number, y: number)
  {
      this.bar = new GameObjects.Graphics(scene);

      this.x = x;
      this.y = y;
      this.value = 100;
      this.p = 76 / 100;

      this.draw();

      scene.add.existing(this.bar);
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

  draw ()
  {
      this.bar.clear();

      //  BG
      this.bar.fillStyle(0x000000);
      this.bar.fillRect(this.x, this.y, 80, 16);

      //  Health

      this.bar.fillStyle(0xffffff);
      this.bar.fillRect(this.x + 2, this.y + 2, 76, 12);

      if (this.value < 30)
      {
          this.bar.fillStyle(0xff0000);
      }
      else
      {
          this.bar.fillStyle(0x00ff00);
      }

      var d = Math.floor(this.p * this.value);

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

  constructor (scene: Scene, color: string, x: number, y: number, enemies: Array<Elf>)
  {
      super(scene, x, y, null);

      this.color = color;

      this.setTexture('elves');
      this.setPosition(x, y);

      this.play(this.color + 'Idle');

      
      this.alive = true;
      
      var hx = (this.color === 'blue') ? 110 : -40;
      
      this.hp = new HealthBar(scene, x - hx, y - 110);
      
      this.enemies = enemies;
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

  fire (target: Array<Elf>)
  {
    console.log(this, target);
      if (target && target.length && this.alive)
      {
          target = Phaser.Utils.Array.Shuffle(target);

          let enemy;

          for (var i = 0; i < target.length; i++)
          {
              if (target[i].alive)
              {
                  enemy = target[i];
              }
          }
          this.play(this.color + 'Attack');

          var offset = (this.color === 'blue') ? 20 : -20;
          var targetX = (this.color === 'blue') ? enemy.x + 30 : enemy.x - 30;

          this.missile.setPosition(this.x + offset, this.y + 20).setVisible(true);

          this.scene.tweens.add({
              targets: this.missile,
              x: targetX,
              ease: 'Linear',
              duration: 500,
              onComplete: function (tween, targets) {
                  targets[0].setVisible(false);
              }
          });

          enemy.damage(8);

      }
      this.timer = this.scene.time.addEvent({ delay: 1000, callback: this.fire, args: [this.enemies], callbackScope: this });
  }

  updateEnemies(enemies: Array<Elf>) {
    this.enemies = enemies;
  }

  render() {
    this.scene.add.existing(this);
    this.on('animationcomplete', this.animComplete, this);
    this.timer = this.scene.time.addEvent({ delay: 1000, callback: this.fire, args: [this.enemies], callbackScope: this });
  }

}

class BlueElf extends Elf {

  constructor (scene: Scene, x: number, y: number, enemies: Array<Elf>)
  {
      super(scene, 'blue', x, y, enemies);

      this.missile = new Missile(scene, 'blue-missile');
      
      scene.add.existing(this.missile);
  }

}

class GreenElf extends Elf {

  constructor (scene, x, y, enemies)
  {
      super(scene, 'green', x, y, enemies);

      this.missile = new Missile(scene, 'green-missile');

      scene.add.existing(this.missile);
  }

}


@Component({
  selector: 'app-user-battle-canvas',
  templateUrl: './user-battle-canvas.component.html',
  styleUrls: ['./user-battle-canvas.component.css']
})
export class UserBattleCanvasComponent implements OnInit {
  phaserGame: Game;
  config: Types.Core.GameConfig;
  load: any;
  anims: any;
  add: any;
  blues: Array<BlueElf>;
  greens: Array<GreenElf>;

  constructor() {
    this.blues = [];
    this.greens = [];
    this.config = {
      width: window.innerWidth,
      height: 600,
      type: AUTO,
      parent: 'game',
      scene: new MainScene(this.blues, this.greens)
    };
   }

  ngOnInit(): void {
    this.phaserGame = new Game(this.config);
  }

  attack() {

  }

}
