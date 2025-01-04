import { TStorage } from '@/model/util';
import { safeLocalStorage } from '@toss/storage';

export const localStorage = {
  setItem: (key: string, value: Object): void => {
    safeLocalStorage.set(key, JSON.stringify({ value }));
  },
  getItem: (key: string): TStorage => {
    const value = safeLocalStorage.get(key);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (key: string): void => {
    safeLocalStorage.remove(key);
  },
  clear: (): void => {
    safeLocalStorage.clear();
  },
};
