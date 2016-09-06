
var  timeOut = 15000;


let Util = {
    /**
     * 添加超时 fetch get 请求
     * @param url ：请求url
     * @param successCallback ：请求成功回调
     * @param failCallback ：请求失败回调
     */


     get: (url,successCallback,failCallback) => {
         //超时处理
         var promis = new Promise(function(resolve,reject) {
             setTimeout(() =>{

             }, timeOut);
         });

         Promise.race([fetch(url),promis])
            .then((response) => {
                if (response.status == 200) {
                    return response.json()
                }else {
                    return {'code':2}
                }
            }, reason => {//超时原因
            }).then(responseData => {
                successCallback(responseData);
            }).catch (error => {
                failCallback(error);
            });
     },

     /**
      * 添加超时 fetch post 请求
      * @param url ：请求url
      * @param successCallback ：请求成功回调
      * @param failCallback ：请求失败回调
      */
      post: (url,successCallback,failCallback) => {
              var promise = new Promise(function(resolve, reject) {
                  setTimeout(() => {
                      reject( 'reject  网络请求超时');
                  },timeOut)
              });

              Promise.race([fetch(url, {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: JSON.stringify({})
              }),promise])
                  .then((response) =>{
                      //console.log('网络请求的response = '+response +'status = '+response.status);
                      if (response.status == 200) {
                          return response.json()
                      }else{
                          return {'code':2}        
                      }
                  }, reason => {
                      //超时
                      //Alert.alert(reason)
                  }).then(responseData => {
                      successCallback(responseData);
                  }).catch(error =>{
                      failCallback(error);
                  });
          }
};

export default Util;


/*
{
  "error_code": 0,
  "reason": "Success",
  "result": {
    "data": [
      {
        "content": "昨天去吃饭，有道菜叫：“女人四十”，觉得很好奇就点了，结果上来一看，是一盘黄花菜。今天吃饭，看着菜单不知道点什么好，突然看到有个菜名“男人四十”，也不贵，想了想，女人四十是（黄花菜），想看看男人四十是什么，于是就点了...服务员上菜道：“男人四十请慢用！”定睛一看，奶奶个腿的..花心大萝卜",
        "hashId": "825209c0e1d11834c3ae7ec35d737a19",
        "unixtime": 1473068630,
        "updatetime": "2016-09-05 17:43:50"
      },
      {
        "content": "今天上班的时候发现一姐们儿神色沮丧，据说是因为昨天晚上出去玩，回家的时候包包被抢了，里面还有前几天借的钱！于是同事们纷纷出言安慰，可是越劝越伤心，几乎一边流泪一边说：“我实在想不通，我到底是哪里不如我的包包了。。。。。”",
        "hashId": "a059b15a7ad970a286c12bec3108be9e",
        "unixtime": 1473066830,
        "updatetime": "2016-09-05 17:13:50"
      },
      {
        "content": "A：你说奇怪不，每到换季，女人们的视力都会急剧下降，就好比如我女票，昨天打开满是衣服的衣柜，惊呼一声“我怎么又没衣服了！” 堪比盲人！  B：这是病，周期性发作，特别可怕，得治。有钱人马上就能治好，没钱就没救了  A：治还是要治的，这不！昨晚她说了那句话之后，哥们就立马借了钱，再没钱的话，连女票都要没有了！  B：我家女票也这样……",
        "hashId": "f0cc5cb1a347756d588bb67c86deedd9",
        "unixtime": 1473066830,
        "updatetime": "2016-09-05 17:13:50"
      }
    ]
  }
}
*/
