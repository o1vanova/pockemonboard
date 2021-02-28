import {action, computed, makeObservable, observable, runInAction} from 'mobx';
import {PockemonsApi} from '../stores/services/api/PockemonsApi';
import {PockemonModel} from './models/PockemonModel';

export class PockemonStore {
  public pockemons: PockemonModel[] = [];

  constructor() {
    makeObservable(this, {
      pockemons: observable,
      getFavorited: computed,
      getByName: action,
      initialize: action,
    });
  }

  public get getFavorited(): PockemonModel[] {
    return this.pockemons.filter(
      (pockemon: PockemonModel) => pockemon.isFavorited,
    );
  }

  public getByName(name: string): PockemonModel | undefined {
    return this.pockemons.find(
      (pockemon: PockemonModel) => pockemon.pockemon.name === name,
    );
  }

  public async initialize(): Promise<void> {
    const result = await PockemonsApi.getAll();
    runInAction(() => {
      this.pockemons = result.map((value) => new PockemonModel(value));
    });
  }
}
