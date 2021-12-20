import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const TodoList = ({todos}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
