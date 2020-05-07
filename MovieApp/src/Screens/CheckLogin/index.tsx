import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex:1;
    background-color:#141414;
    justify-content: center;
    align-items: center;
`;

interface Props{
    navigation: NavigationScreenProp<NavigationState>;
}

//로그인 체크 후 화면 전환
const CheckLogin = ({navigation}:Props) =>{
    AsyncStorage.getItem('key')
    .then(value=>{
        if(value){
            navigation.navigate('ERPNavigator');
        }else{
            navigation.navigate('LoginNavigator');
        }
    })
    .catch((error:Error)=>{
        console.log(error);
    });

    //로딩화면
    return(
        <Container>
            <ActivityIndicator size="large" color="#E70915"/>
        </Container>
    )
};

//로딩화면만 표시하기 때문에 헤더는 표시하지 않도록 설정
CheckLogin.navigationOptions = {
    header: null,       
};

export default CheckLogin;