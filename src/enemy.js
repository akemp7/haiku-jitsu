import $ from 'jquery';



export class Enemy {
  constructor(health) {
    this.health = health;
    this.keywords = [];
    this.haikus = [];
    this.enemyHealthBar();
  }

  takeDamage(dmgAmount) {
    this.health -= dmgAmount;
  }

  attack() {
    let randomIndex = Math.floor(Math.random()*this.haikus.length);
    return this.haikus[randomIndex];
  }

  checkDefeated() {
    let defeated = false;
    if(this.health <= 0) {
      defeated = true;
    }
    return defeated;
  }
  enemyHealthBar() {
    $("#adv-health").text(this.health);
    if (this.health === 100) {
      $(".a1-hp").show();
      $(".a1-hp").removeClass("red");
      $(".a1-hp").addClass("green");
    } else if(this.health <= 90){
      $("#a1-100").fadeOut();
    } else if (this.health <= 80){
      $("#a1-90").fadeOut();
    } else if (this.health <= 70){
      $("#a1-80").fadeOut();
    } else if (this.health <= 60){
      $("#a1-70").fadeOut();
      $(".a1-hp").removeClass("green");
      $(".a1-hp").addClass("yellow");
    } else if (this.health <= 50){
      $("#a1-60").fadeOut();
    } else if (this.health <= 40){
      $("#a1-50").fadeOut();
    } else if (this.health <= 30){
      $("#a1-40").fadeOut();
      $(".a1-hp").removeClass("yellow")
      $(".a1-hp").addClass("red");
    } else if (this.health <= 20){
      $("#a1-30").fadeOut();
    } else if (this.health <= 10){
      $("#a1-20").fadeOut();
    } else if (this.health <= 0){
      $("#a1-10").fadeOut();
    }
  }
}

export class Hippie extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["flower", "love", "incense", "groovy", "psychedelic", "peace", "dude", "aura"];
    this.haikus = [];
    this.haikus[0] = ["Hey dude like chill out", "my birkenstocks are busted", "Um... I like need a minute"];
    this.haikus[1] = ["They call me Love Child", "Patchouli is my incense", "Rose is my flower"];
    this.haikus[2] = ["Dude, radical waves.", "breaking upon my brain box.", "Tides between my ears"];
    this.haikus[3] = ["Peace and love are great", "The Grateful Dead are better", "Have you heard Phish yet?"];
    this.haikus[4] = ["Hey man, be nice dude", "Don't harsh my buzz, I'm tripping", "I'm feeling groovy"];
    this.haikus[5] = ["Dude don't drag me down", "your aura's all askew and", "I'm too high to fight"];
  }
}

export class Hipster extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["micro-brew", "vinyl", "fixed-gear", "mustache", "fedora", "exclusive", "small-batch", "artisan"];
    this.haikus = [];
    this.haikus[0] = ["I write lots of haikus", "but you would'nt get them", "..."];
    this.haikus[1] = ["Where can I get some", "post-ironic micro-brew", "small-batch kombucha?"];
    this.haikus[2] = ["My band is on tour", "with a band you've never heard", "it's that exclusive"];
    this.haikus[3] = ["My mustache got stuck", "in a bespoke fixed-gear bike", "lost my fedora"];
    this.haikus[4] = ["Hyphonated words", "are the vinyl of language", "artisan delight!"];
    this.haikus[5] = ["Free-box foraging", "flannel fashion, frankly", "I'm a trend setter."];
  }
}

export class Hacker extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["code", "hacker", "computer", "internet", "javascript", "password", "asynchronously", "logic"];
    this.haikus = [];
    this.haikus[0] = ["My code is 1337", "I can't be beat", "What do you mean, parsing error?"];
    this.haikus[1] = ["Internet of things", "a hacker's wonderful dream", "D.D.O.S. time"];
    this.haikus[2] = ["My code is so dry", "I only write JavaScript", "asynchronously"];
    this.haikus[3] = ["Hacked your computer", "your password is just password", "you're a total noob"];
    this.haikus[4] = ["Hot wires in my hands", "connect for complete circuit", "Dropping logic bombs"];
    this.haikus[5] = ["Crying constantly", "code can't compile correctly", "congratulations"];
  }
}

export class Professor extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["Vocabulary", "Intimidating", "Illuminati", "Megalomaniacal", "Conceptualization", "Unbelievable", "University"];
    this.haikus = [];
    this.haikus[0] = ["Appreciating", "for the ivory tower", "achoo."];
    this.haikus[1] = ["Abominable", "Decriminalization", "Illuminati"];
    this.haikus[2] = ["Creativity", "Oversimplification", "University"];
    this.haikus[3] = ["Unbelievable", "Megalomaniacal", "Diagnostician"];
    this.haikus[4] = ["Intimidating", "Editorializing", "Vocabulary"];
    this.haikus[5] = ["Conscientiousness", "Conceptualization", "Communication"];
  }
}

export class Goth extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["soul", "miasma", "angst", "rain", "pain", "darkness", "death", "decay"];
    this.haikus = [];
    this.haikus[0] = ["Death, pain, and sadness", "there is no escape from this", "I'm really really sad"];
    this.haikus[1] = ["Miasma raining", "on my dark decaying soul", "death is coming soon"];
    this.haikus[2] = ["Angst on whole wheat toast", "pain is my companion", "rain on my parade"];
    this.haikus[3] = ["Darkness surrounds me", "a frown is my umbrella", "there all is aching"];
    this.haikus[4] = ["The cemetary", "is where I spend my free time", "summer vacation"];
    this.haikus[5] = ["Macabre maddening", "myopic miasmaness", "makes me malcontent"];
  }
}
