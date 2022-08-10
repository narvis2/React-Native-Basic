import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>Extra Text!</Text>
    </>
  );
}
// 기본값 설정
Greeting.defaultProps = {
  name: '리엑트 네이티브',
};

// 다른 파일에서 이 컴포넌트를 불러올 수 있게 해주는 코드
export default Greeting;
