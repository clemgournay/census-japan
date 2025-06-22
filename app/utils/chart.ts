import { PopulationComposition } from '@models/population';
import { Prefecture } from '@models/prefecture';
import { ChartItem } from '@models/chart';

export const BuildChartData = (categoryLabel: string, compositions: Array<PopulationComposition>, prefectures: Array<Prefecture>): Array<ChartItem> => {
  const items: Array<ChartItem> = [];
  let prefIndex = 0;
  for (const composition of compositions) {
    const prefecture = prefectures[prefIndex];
    const category = composition.data.find(c => c.label === categoryLabel);
    if (category) {
      for (const node of category.data) {
        const item = items.find(i => i.name === node.year);
        const key = `pref${prefecture.prefCode}`
        if (item) {
          if (!item[key]) {
            item[key] = node.value;
          }
        } else {
          const newItem: ChartItem = {name: node.year};
          newItem[key] = node.value;
          items.push(newItem)
        }
      }
    }
    prefIndex++;
  }
  return items;
}
