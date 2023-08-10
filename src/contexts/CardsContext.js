import React, { useState } from "react";

// Context Object for Cards
export const CardsContext = React.createContext();

// Context Provider for Cards
export const CardsContextProvider = ({ children }) => {
  // State Variable
  const [cards, setCards] = useState(
    [
      { id: 1, img: require("../images/avocado.jpg"), stat: "" },
      { id: 2, img: require("../images/bacon_egg_cheese.jpg"), stat: "" },
      { id: 3, img: require("../images/beer_mug.jpg"), stat: "" },
      { id: 4, img: require("../images/beer_pub.jpg"), stat: "" },
      { id: 5, img: require("../images/bell_pepper.jpg"), stat: "" },
      { id: 6, img: require("../images/brocolli.jpg"), stat: "" },
      { id: 7, img: require("../images/bucket_chicken.jpg"), stat: "" },
      { id: 8, img: require("../images/bucket_drumsticks.jpg"), stat: "" },
      { id: 9, img: require("../images/butter.jpg"), stat: "" },
      { id: 10, img: require("../images/cake.jpg"), stat: "" },
      { id: 11, img: require("../images/cereal.jpg"), stat: "" },
      { id: 12, img: require("../images/chili.jpg"), stat: "" },
      { id: 13, img: require("../images/choco_bar.jpg"), stat: "" },
      { id: 14, img: require("../images/choco_heart.jpg"), stat: "" },
      { id: 15, img: require("../images/footlong.jpg"), stat: "" },
      { id: 16, img: require("../images/fruits.jpg"), stat: "" },
      { id: 17, img: require("../images/grapes.jpg"), stat: "" },
      { id: 18, img: require("../images/groceries.jpg"), stat: "" },
      { id: 19, img: require("../images/ham_egg.jpg"), stat: "" },
      { id: 20, img: require("../images/honey_jar_close.jpg"), stat: "" },
      { id: 21, img: require("../images/honey_jar_open.jpg"), stat: "" },
      { id: 22, img: require("../images/hotdog.jpg"), stat: "" },
      { id: 23, img: require("../images/ice_cream_bowl.jpg"), stat: "" },
      { id: 24, img: require("../images/ice_cream_cone.jpg"), stat: "" },
      { id: 25, img: require("../images/ice_cream_cup.jpg"), stat: "" },
      { id: 26, img: require("../images/ice_cream_pint.jpg"), stat: "" },
      { id: 27, img: require("../images/ice_cream_stick.jpg"), stat: "" },
      { id: 28, img: require("../images/iced_tea.jpg"), stat: "" },
      { id: 29, img: require("../images/kettle.jpg"), stat: "" },
      { id: 30, img: require("../images/latte.jpg"), stat: "" },
      { id: 31, img: require("../images/lemonade_cup.jpg"), stat: "" },
      { id: 32, img: require("../images/lemonade_jar.jpg"), stat: "" },
      { id: 33, img: require("../images/lemonade_short.jpg"), stat: "" },
      { id: 34, img: require("../images/lemonade_tall.jpg"), stat: "" },
      { id: 35, img: require("../images/lollipops.jpg"), stat: "" },
      { id: 36, img: require("../images/macaroons.jpg"), stat: "" },
      { id: 37, img: require("../images/martini.jpg"), stat: "" },
      { id: 38, img: require("../images/milk_cartoon.jpg"), stat: "" },
      { id: 39, img: require("../images/orange_juice.jpg"), stat: "" },
      { id: 40, img: require("../images/pineapple.jpg"), stat: "" },
      { id: 41, img: require("../images/pizza_melt.jpg"), stat: "" },
      { id: 42, img: require("../images/pizza_slice.jpg"), stat: "" },
      { id: 43, img: require("../images/pumpkin.jpg"), stat: "" },
      { id: 44, img: require("../images/quesadillas.jpg"), stat: "" },
      { id: 45, img: require("../images/ramen.jpg"), stat: "" },
      { id: 46, img: require("../images/red_onion.jpg"), stat: "" },
      { id: 47, img: require("../images/salad.jpg"), stat: "" },
      { id: 48, img: require("../images/soda_bottle.jpg"), stat: "" },
      { id: 49, img: require("../images/steak.jpg"), stat: "" },
      { id: 50, img: require("../images/stew.jpg"), stat: "" },
      { id: 51, img: require("../images/strawberry_choco.jpg"), stat: "" },
      { id: 52, img: require("../images/sunny_side_up.jpg"), stat: "" },
      { id: 53, img: require("../images/synth.jpg"), stat: "" },
      { id: 54, img: require("../images/taco.jpg"), stat: "" },
      { id: 55, img: require("../images/tortilla.jpg"), stat: "" },
      { id: 56, img: require("../images/trash_bin.jpg"), stat: "" },
      { id: 57, img: require("../images/watermelon.jpg"), stat: "" },
    ]
    // .sort(() => Math.random() - 0.5)
  );

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};
