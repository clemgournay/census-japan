export const ParsePrefs = (prefs: string | null | undefined): Array<number> => {
  let codes: Array<number> = [1];
  if (prefs) {
    const codeStrings: Array<string> = prefs.split(',');
    codes = codeStrings.map(c => parseInt(c));
  }
  return codes;
}

export const FormatPopulation = (population: number): string => {
  const popSTR = population.toString();
  const regExp = new RegExp(/(\d)(?=(\d\d\d)+$)/g);
  const separators = ['', '万', '億', '兆', '京', '垓'];
  const parts = [];
  let result = '';
  
  for (let i = 0; i < Math.ceil(popSTR.length / 4); i++){
    parts[i] = Number(popSTR.substring(popSTR.length - i * 4, popSTR.length - (i + 1) * 4));
    if (parts[i] != 0) {
      const replaced = parts[i].toString().replace(regExp, '$1,');
      result = replaced + separators[i] + result;
    }
  }
  return `${result}人`;

}