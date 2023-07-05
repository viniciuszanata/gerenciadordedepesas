import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AccountStoreMbx {
  constructor() {
    makeAutoObservable(this);
  }
  setUser = async (item: string) => {
    try {
      await AsyncStorage.setItem('user', item);
    } catch (error) {
      throw new Error(`accountStore.set.error ===> ${error}`);
    }
  };
  getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      return !!user;
    } catch (error) {
      console.log(`accountStore.get.error ===> ${error}`);
      return false;
    }
  };
  deleteUser = async () => {
    await AsyncStorage.clear();
  };
}

let singleton: AccountStoreMbx | null;

export const AccountStore = () => {
  if (!singleton) {
    singleton = new AccountStoreMbx();
  }
  return singleton;
};
