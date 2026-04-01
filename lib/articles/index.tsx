import { electricityBillArticle } from "./BillCalculation"
import { reduceElectricityArticle } from "./tipsreduceElectricity"
import { slabRatesArticle } from "./slabRates"

export const articles = [
  electricityBillArticle,
  reduceElectricityArticle,
  slabRatesArticle,
]