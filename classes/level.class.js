class Level {
  enemies;
  clouds;
  layers;
  level_end_x = 4200;
  endboss;
  coins;

  // achte auf die Reihenfolge Du Depp
  constructor(enemies, coins, salsas, clouds, layers, endboss) {
    this.enemies = enemies;
    this.coins = coins;
    this.salsas = salsas;
    this.clouds = clouds;
    this.layers = layers;
    this.endboss = endboss;
  }

  deleteSalsa(salsa) {
    let index = this.salsas.indexOf(salsa);
    let x = this.salsas.splice(index, 1);
    console.log(`myArray values: ${index}`);
    console.log(`variable x value: ${x}`);

  }
}
