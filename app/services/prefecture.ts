import { ApiResp } from '@models/api-resp'
import { Prefecture } from '@models/prefecture'
import { ERRORS } from '@errors/prefecture';
import { GetApiOptions } from '@utils/config';
import { Wait } from '@utils/time';

export class PrefectureService {

  endpointURI: string = `${process.env.API_URI}/prefectures`
  
  constructor() {
    
  }

  async fetchAll(): Promise<Prefecture[]> {
    try {
      const resp: Response = await fetch(this.endpointURI, GetApiOptions());
      if (resp.status === 200) {
        await Wait(5000);
        const data: ApiResp = await resp.json();
        return data.result;
      } else {
        throw new Error(ERRORS.network);
      }
      
    } catch (e) {
      console.error(e);
      throw new Error(ERRORS.network);
    }
  }

}