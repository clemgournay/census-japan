export const ParsePrefs = (prefs: string | null | undefined): Array<number> => {
  let codes: Array<number> = [];
  if (prefs) {
    const codeStrings: Array<string> = prefs.split(',');
    codes = codeStrings.map(c => parseInt(c));
  }
  return codes;
}