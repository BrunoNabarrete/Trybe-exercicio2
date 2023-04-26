import Pizza from "./exercicio4";
import { Common, Vegetarian, Sugar } from "./PizzaFlavorsTypes";

export default interface PizzaCommon extends Pizza {
    flavor: Common
}


