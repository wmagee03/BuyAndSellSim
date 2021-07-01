// Wheat class extended from base item class
import BaseItem from "./baseItem";
import BaseProductType from "../Enums/productTypes";

export class Wheat extends BaseItem {

  constructor(value) {
    super(value);
    this.name = "Wheat";
    this.details = "A type of grain that can be turned into flour for making baked goods."
    this.defaultValue = 1;
    this.productType = [
      BaseProductType.PLANT_PRODUCE,
      BaseProductType.COOKING_MATERIAL
    ];
  }

}