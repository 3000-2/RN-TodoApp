import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        throw new Error('Not found!');
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('error');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (r) {
      throw new Error('error');
    }
  },
};

export default todosStorage;
