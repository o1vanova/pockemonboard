import {PockemonDto} from '../../models/PockemonDto';
import {Http} from '../../../stores/services/Http';
import API_URL from '../../../config/config';

export class PockemonsApi {
  public static async getAll(): Promise<PockemonDto[]> {
    return await Http.get<PockemonDto[]>(`${API_URL}/pockemons/data.json`);
  }
}
