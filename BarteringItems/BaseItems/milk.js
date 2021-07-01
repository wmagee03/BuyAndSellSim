// Wheat class extended from base item class
import BaseItem from "./baseItem";
import BaseProductType from "../Enums/productTypes";

export class Milk extends BaseItem {

  constructor(value) {
    super(value);
    this.name = "Milk";
    this.details = "A type of drinkable animal product that can be processed into more complex foods"
    this.defaultValue = 3;
    this.productType = [
      BaseProductType.ANIMAL_PRODUCE,
      BaseProductType.COOKING_MATERIAL,
      BaseProductType.LIQUID
    ];
  }

}