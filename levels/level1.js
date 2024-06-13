
let level1;
/**
 * init level 1
 * 
 */
function initLevel() {
  level1 = new Level(
    [
      new Chicken(),
      new Yellowchicken(),
      new Chicken(),
      new Yellowchicken(),
      new Chicken(),
      new Yellowchicken(),
      new Chicken(),
      new Yellowchicken(),
      new Endboss(),
    ],
    [
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
    ],
    [
      new Salsabottle(),
      new Salsabottleground(),
      new Salsabottle(),
      new Salsabottleground(),
      new Salsabottle(),
      new Salsabottleground(),
      new Salsabottle(),
      new Salsabottleground(),
      new Salsabottle(),
      new Salsabottleground(),
      new Salsabottle(),
      new Salsabottleground(),
    ],
    [
      new Cloud(-2000),
      new Cloud(-500),
      new Cloud(-200),
      new Cloud(0),
      new Cloud(400),
      new Cloud(900),
      new Cloud(1500),
      new Cloud(2000),
    ],
    [
      new layer("assets/5_background/layers/air.png", -719),
      new layer("assets/5_background/layers/3_third_layer/2.png", -719),
      new layer("assets/5_background/layers/2_second_layer/2.png", -719),
      new layer("assets/5_background/layers/1_first_layer/2.png", -719),

      new layer("assets/5_background/layers/air.png", 0),
      new layer("assets/5_background/layers/3_third_layer/1.png", 0),
      new layer("assets/5_background/layers/2_second_layer/1.png", 0),
      new layer("assets/5_background/layers/1_first_layer/1.png", 0),

      new layer("assets/5_background/layers/air.png", 719),
      new layer("assets/5_background/layers/3_third_layer/2.png", 719),
      new layer("assets/5_background/layers/2_second_layer/2.png", 719),
      new layer("assets/5_background/layers/1_first_layer/2.png", 719),

      new layer("assets/5_background/layers/air.png", 1438),
      new layer("assets/5_background/layers/3_third_layer/1.png", 1438),
      new layer("assets/5_background/layers/2_second_layer/1.png", 1438),
      new layer("assets/5_background/layers/1_first_layer/1.png", 1438),

      new layer("assets/5_background/layers/air.png", 2156),
      new layer("assets/5_background/layers/3_third_layer/2.png", 2156),
      new layer("assets/5_background/layers/2_second_layer/2.png", 2156),
      new layer("assets/5_background/layers/1_first_layer/2.png", 2156),

      new layer("assets/5_background/layers/air.png", 2874),
      new layer("assets/5_background/layers/3_third_layer/1.png", 2874),
      new layer("assets/5_background/layers/2_second_layer/1.png", 2874),
      new layer("assets/5_background/layers/1_first_layer/1.png", 2874),

      new layer("assets/5_background/layers/air.png", 3592),
      new layer("assets/5_background/layers/3_third_layer/2.png", 3592),
      new layer("assets/5_background/layers/2_second_layer/2.png", 3592),
      new layer("assets/5_background/layers/1_first_layer/2.png", 3592),

      new layer("assets/5_background/layers/air.png", 4310),
      new layer("assets/5_background/layers/3_third_layer/1.png", 4310),
      new layer("assets/5_background/layers/2_second_layer/1.png", 4310),
      new layer("assets/5_background/layers/1_first_layer/1.png", 4310),
    ]
  );
}
