import { ApiResp } from '@models/api-resp'
import { ERRORS } from '@errors/population';
import { GetApiOptions } from '@utils/config';
import { PopulationComposition } from '@models/population';

export class PopulationService {

  endpointURI: string = `${process.env.API_URI}/population`
  
  constructor() {
    
  }

  async fetchCompositionByPref(code: number = 1): Promise<PopulationComposition> {
    try {
      const resp: Response = await fetch(`${this.endpointURI}/composition/perYear?prefCode=${code}`, GetApiOptions());
      if (resp.status === 200) {
        const data: ApiResp = await resp.json();
        return data.result;
      } else {
        throw new Error(`${ERRORS.network}`);
      }
      
    } catch (e) {
      let unknownError: string = '';
      if (e instanceof Error) unknownError = e.message;
      throw new Error(`${ERRORS.network}\n下記のエラーをご確認ください。\n${unknownError}`);
    }
  }

  async fetchCompositionByPrefs(codes: Array<number> = []): Promise<Array<PopulationComposition>> {
    const fetchList = [];
    if (codes.length > 0) {
      for (const code of codes) {
        fetchList.push(this.fetchCompositionByPref(code));
      }
    }
    return await Promise.all(fetchList);
  }

}