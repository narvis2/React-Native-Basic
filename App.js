/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {useState} from 'react';
/**
 * SafeAreaView : iPhone X 이상 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지해준다.
 * Text : Text를 보여주는 역할
 * View : 가장 기본적인 컴포넌트로 레이아웃 및 스타일을 담당한다.
 */
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './compoents/Counter';

const App = () => {
  /**
   * 배열 구조 분해 할당 문법 사용
   * useState -> Hook 으로 상태 값을 관리하는 함수
   * @param visible : 상태 값을 나타냄
   * @param setVisible : 상태 값을 변경할 수 있는 함수
   */
  // const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1, // View가 화면의 전체를 사용하도록 설정
  },
});

export default App;
