import {useContext} from 'react';
import {MobXProviderContext} from 'mobx-react';
import {PockemonStore} from '../stores/PockemonStore';

export function useStore(): PockemonStore {
  const stores = useContext(MobXProviderContext);

  return stores.store;
}
