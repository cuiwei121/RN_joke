import {Dimensions,Alert} from 'react-native';

//屏幕的宽高
let window = {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
};

let url = {
    joke_url:'http://japi.juhe.cn/joke/content/list.from',
    wxUrl:'http://v.juhe.cn/weixin/query',
};

let colors = {
    themeColor :'rgb(217,51,58)',
    backgroundcolor : 'rgb(251,250,248)',
    XZBlue_0_122_255 : 'rgb(0,122,255)',
    XZgrey52 : 'rgb(52,52,52)',
    XZgrey85 : 'rgb(85,85,85)',
};

let alert = {
    alertShow:(message) => {
        Alert.alert(
            '提示：',
            '出错了，重新加载试试',
            [
                {text: '确定'}
            ]
        );
    }
};

export default {
    window: window,
    url:url,
    colors: colors,
    alert:alert
}
