import {makeAutoObservable} from 'mobx';

class HomeStoreMbx {
  constructor() {
    makeAutoObservable(this);
  }

  handlerObj = () => {
    return {
      id: 1,
      name: 'Vinicius',
    };
  };
}

let singleton: HomeStoreMbx | null;

export const HomeStore = () => {
  if (singleton !== null) {
    singleton = new HomeStoreMbx();
  }
  return singleton;
};
