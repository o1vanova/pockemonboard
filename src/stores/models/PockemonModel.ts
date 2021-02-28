import {action, makeObservable, observable, runInAction} from 'mobx';
import {PockemonDto} from './PockemonDto';

export class PockemonModel {
  public pockemon: PockemonDto;
  public isFavorited: boolean = false;

  constructor(value: PockemonDto) {
    makeObservable(this, {
      toggleFavorited: action,
      isFavorited: observable,
    });
    this.pockemon = value;
  }

  public toggleFavorited() {
    runInAction(() => {
      this.isFavorited = !this.isFavorited;
    });
  }
}
