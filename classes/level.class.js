class Level {
  enemies;
  clouds;
  layers;
  level_end_x = 4200;
  endboss;
  coins;
  salsas;

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

  }

  deleteEnemy(enemy) {

    setTimeout(() => {
      let index = this.enemies.indexOf(enemy);
                 if (index > -1) { // Prüfe, ob der Feind noch in der Liste ist
        let x = this.enemies.splice(index, 1);

      }
    }, 1000); // 1000 Millisekunden = 1 Sekunde
  }



  deleteCoin(coin) {
    let index = this.coins.indexOf(coin);
    let x = this.coins.splice(index, 1);

  }
}
