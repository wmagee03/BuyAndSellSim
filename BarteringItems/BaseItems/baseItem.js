// Base Item class to be extended by other classes
import { customRounding, calcPercentChange } from "../../utils/mathUtils";

export default class BaseItem {

  constructor(value) {
    this.name = 'Base';
    this.details = '';
    this.defaultValue = 0;
    this.percentChangeFromPrevious = '0%';
    this.value = value;
  }

  setValue(newValue) {
    this.percentChangeFromPrevious = calcPercentChange(this.value, newValue);
    this.value = Math.max(0, newValue);
  }

  adjustValue(changeBy, isPercent = false) {
    let result = isPercent ? this.value * changeBy : this.value + changeBy;
    this.percentChangeFromPrevious = calcPercentChange(this.value, result);
    this.value = Math.max(0, customRounding(result, 2));
  }

}