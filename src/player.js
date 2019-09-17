import $ from 'jquery';


export class Player {
  constructor() {
    this.health = 100;
    this.keywords = [];
    this.playerHealthBar();
  }

  takeDamage(dmgAmount) {
    this.health -= dmgAmount;
  }

  checkDefeated() {
    let defeated = false;
    if(this.health <= 0) {
      defeated = true;
    }
    return defeated;
  }
  playerHealthBar() {
    $("#player-health").text(this.health);
    if (this.health === 100) {
      $(".p1-hp").show();
      $(".p1-hp").removeClass("red");
      $(".p1-hp").addClass("green");
    } else if(this.health <= 90){
      $("#p1-100").fadeOut();
    } else if (this.health <= 80){
      $("#p1-90").fadeOut();
    } else if (this.health <= 70){
      $("#p1-80").fadeOut();
    } else if (this.health <= 60){
      $("#p1-70").fadeOut();
      $(".p1-hp").removeClass("green");
      $(".p1-hp").addClass("yellow");
    } else if (this.health <= 50){
      $("#p1-60").fadeOut();
    } else if (this.health <= 40){
      $("#p1-50").fadeOut();
    } else if (this.health <= 30){
      $("#p1-40").fadeOut();
      $(".p1-hp").removeClass("yellow")
      $(".p1-hp").addClass("red");
    } else if (this.health <= 20){
      $("#p1-30").fadeOut();
    } else if (this.health <= 10){
      $("#p1-20").fadeOut();
    } else if (this.health <= 0){
      $("#p1-10").fadeOut();
    }
  }
}
