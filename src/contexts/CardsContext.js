import React, { useState } from "react";

// Context Object for Cards
export const CardsContext = React.createContext();

// Context Provider for Cards
export const CardsContextProvider = ({ children }) => {
  // State Variable
  const [cards, setCards] = useState(
    [
      { id: 1, type: "", stat: "", img: require("../images/avocado.jpg") },
      {
        id: 2,
        type: "",
        stat: "",
        img: require("../images/bacon_egg_cheese.jpg"),
      },
      {
        id: 3,
        type: "",
        stat: "",
        img: require("../images/beer_mug.jpg"),
      },
      {
        id: 4,
        type: "",
        stat: "",
        img: require("../images/beer_pub.jpg"),
      },
      {
        id: 5,
        type: "",
        stat: "",
        img: require("../images/bell_pepper.jpg"),
      },
      {
        id: 6,
        type: "",
        stat: "",
        img: require("../images/brocolli.jpg"),
      },
      {
        id: 7,
        type: "",
        stat: "",
        img: require("../images/bucket_chicken.jpg"),
      },
      {
        id: 8,
        type: "",
        stat: "",
        img: require("../images/bucket_drumsticks.jpg"),
      },
      { id: 9, type: "", stat: "", img: require("../images/butter.jpg") },
      { id: 10, type: "", stat: "", img: require("../images/cake.jpg") },
      { id: 11, type: "", stat: "", img: require("../images/cereal.jpg") },
      { id: 12, type: "", stat: "", img: require("../images/chili.jpg") },
      {
        id: 13,
        type: "",
        stat: "",
        img: require("../images/choco_bar.jpg"),
      },
      {
        id: 14,
        type: "",
        stat: "",
        img: require("../images/choco_heart.jpg"),
      },
      {
        id: 15,
        type: "",
        stat: "",
        img: require("../images/footlong.jpg"),
      },
      { id: 16, type: "", stat: "", img: require("../images/fruits.jpg") },
      { id: 17, type: "", stat: "", img: require("../images/grapes.jpg") },
      {
        id: 18,
        type: "",
        stat: "",
        img: require("../images/groceries.jpg"),
      },
      {
        id: 19,
        type: "",
        stat: "",
        img: require("../images/ham_egg.jpg"),
      },
      {
        id: 20,
        type: "",
        stat: "",
        img: require("../images/honey_jar_close.jpg"),
      },
      {
        id: 21,
        type: "",
        stat: "",
        img: require("../images/honey_jar_open.jpg"),
      },
      { id: 22, type: "", stat: "", img: require("../images/hotdog.jpg") },
      {
        id: 23,
        type: "",
        stat: "",
        img: require("../images/ice_cream_bowl.jpg"),
      },
      {
        id: 24,
        type: "",
        stat: "",
        img: require("../images/ice_cream_cone.jpg"),
      },
      {
        id: 25,
        type: "",
        stat: "",
        img: require("../images/ice_cream_cup.jpg"),
      },
      {
        id: 26,
        type: "",
        stat: "",
        img: require("../images/ice_cream_pint.jpg"),
      },
      {
        id: 27,
        type: "",
        stat: "",
        img: require("../images/ice_cream_stick.jpg"),
      },
      {
        id: 28,
        type: "",
        stat: "",
        img: require("../images/iced_tea.jpg"),
      },
      { id: 29, type: "", stat: "", img: require("../images/kettle.jpg") },
      { id: 30, type: "", stat: "", img: require("../images/latte.jpg") },
      {
        id: 31,
        type: "",
        stat: "",
        img: require("../images/lemonade_cup.jpg"),
      },
      {
        id: 32,
        type: "",
        stat: "",
        img: require("../images/lemonade_jar.jpg"),
      },
      {
        id: 33,
        type: "",
        stat: "",
        img: require("../images/lemonade_short.jpg"),
      },
      {
        id: 34,
        type: "",
        stat: "",
        img: require("../images/lemonade_tall.jpg"),
      },
      {
        id: 35,
        type: "",
        stat: "",
        img: require("../images/lollipops.jpg"),
      },
      {
        id: 36,
        type: "",
        stat: "",
        img: require("../images/macaroons.jpg"),
      },
      {
        id: 37,
        type: "",
        stat: "",
        img: require("../images/martini.jpg"),
      },
      {
        id: 38,
        type: "",
        stat: "",
        img: require("../images/milk_cartoon.jpg"),
      },
      {
        id: 39,
        type: "",
        stat: "",
        img: require("../images/orange_juice.jpg"),
      },
      {
        id: 40,
        type: "",
        stat: "",
        img: require("../images/pineapple.jpg"),
      },
      {
        id: 41,
        type: "",
        stat: "",
        img: require("../images/pizza_melt.jpg"),
      },
      {
        id: 42,
        type: "",
        stat: "",
        img: require("../images/pizza_slice.jpg"),
      },
      {
        id: 43,
        type: "",
        stat: "",
        img: require("../images/pumpkin.jpg"),
      },
      {
        id: 44,
        type: "",
        stat: "",
        img: require("../images/quesadillas.jpg"),
      },
      { id: 45, type: "", stat: "", img: require("../images/ramen.jpg") },
      {
        id: 46,
        type: "",
        stat: "",
        img: require("../images/red_onion.jpg"),
      },
      { id: 47, type: "", stat: "", img: require("../images/salad.jpg") },
      {
        id: 48,
        type: "",
        stat: "",
        img: require("../images/soda_bottle.jpg"),
      },
      { id: 49, type: "", stat: "", img: require("../images/steak.jpg") },
      { id: 50, type: "", stat: "", img: require("../images/stew.jpg") },
      {
        id: 51,
        type: "",
        stat: "",
        img: require("../images/strawberry_choco.jpg"),
      },
      {
        id: 52,
        type: "",
        stat: "",
        img: require("../images/sunny_side_up.jpg"),
      },
      { id: 53, type: "", stat: "", img: require("../images/synth.jpg") },
      { id: 54, type: "", stat: "", img: require("../images/taco.jpg") },
      {
        id: 55,
        type: "",
        stat: "",
        img: require("../images/tortilla.jpg"),
      },
      {
        id: 56,
        type: "",
        stat: "",
        img: require("../images/trash_bin.jpg"),
      },
      {
        id: 57,
        type: "",
        stat: "",
        img: require("../images/watermelon.jpg"),
      },
    ]
    // .sort(() => Math.random() - 0.5)
  );

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};
