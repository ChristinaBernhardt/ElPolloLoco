class Level {
  enemies;
  clouds;
  layers;
  level_end_x = 4200;
  endboss;
  coins;


  // achte auf die Reihenfolge Du Depp
  constructor(enemies, coins, clouds, layers, endboss ) {
    this.enemies = enemies;
    this.coins = coins;
    this.clouds = clouds;
    this.layers = layers;
    this.endboss = endboss;
 



  }
}
