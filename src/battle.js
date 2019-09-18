import {haikuChecker} from './haikuChecker.js'
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {doDamage} from './doDamage.js';
import $ from 'jquery';

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.over = false;
    this.winner = '';
  }

  async playerTurn() {
    let line1 = $("#first-line").val();
    let line2 = $("#second-line").val();
    let line3 = $("#third-line").val();
    $("#haiku").trigger("reset");

    let damage = 0;
    if(haikuChecker(line1, line2, line3)) {
      damage = await doDamage(line1, line2, line3, this.enemy);
      console.log(damage);
      this.enemy.takeDamage(damage);

      this.enemy.enemyHealthBar();

    }
    this.battleOver();
    if(!this.over) {
      this.enemyTurn();
    }

  }


  async enemyTurn() {
    let attack = this.enemy.attack();
    let damage = 0;
    document.getElementById("a1").innerText = attack[0];
    document.getElementById("a2").innerText  = attack[1];
    document.getElementById("a3").innerText = attack[2];
    document.getElementById("myModal").style.display = "block";
    setTimeout(function() {
      document.getElementById("myModal").style.display = 'none';
    }, 5000);
    if(haikuChecker(attack[0], attack[1], attack[2])) {
      damage = await doDamage(attack[0], attack[1], attack[2], this.player);
      this.player.takeDamage(damage);

      this.player.playerHealthBar();

    }
    console.log(attack, damage);
    this.battleOver();
  }

  battleOver() {
    if(this.player.checkDefeated()) {
      this.over = true;
      this.winner = this.enemy;
    } else if(this.enemy.checkDefeated()) {
      this.over = true;
      this.winner = this.player;
    }
  }
}
