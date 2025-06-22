import { PopulationComposition } from '@models/population';
import { Prefecture } from '@models/prefecture';
import { ChartItem, ChartYear } from '@models/chart';

export const BuildChartData = (categoryLabel: string, compositions: Array<PopulationComposition>, prefectures: Array<Prefecture>): Array<ChartItem> => {
  const items: Array<ChartItem> = [];
  let prefIndex = 0;
  for (let composition of compositions) {
    let prefecture = prefectures[prefIndex];
    const category = composition.data.find(c => c.label === categoryLabel);
    if (category) {
      for (let node of category.data) {
        const item = items.find(i => i.name === node.year);
        const key = `pref${prefecture.prefCode}`
        if (item) {
          if (!item[key]) {
            item[key] = node.value;
          }
        } else {
          let newItem: ChartItem = {name: node.year};
          newItem[key] = node.value;
          items.push(newItem)
        }
      }
    }
    prefIndex++;
  }
  return items;
}

export const GetYears = (items: Array<ChartItem>): Array<ChartYear> => {
  return items.map(i => {
    const keys = Object.keys(i).filter(k => k.startsWith('pref'));
    return {year: parseInt(i.name.toString()), keys};
  });
}