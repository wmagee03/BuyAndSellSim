// Wheat class extended from base item class
import BaseItem from "./baseItem";
import BaseProductType from "../Enums/productTypes";

export class Fruit extends BaseItem {

  constructor(value) {
    super(value);
    this.name = "Fruit";
    this.details = "A type of sweet edible plant product that can be used to make sweet dishes."
    this.defaultValue = 1;
    this.productType = [
      BaseProductType.PLANT_PRODUCE,
      BaseProductType.COOKING_MATERIAL
    ];
  }

}