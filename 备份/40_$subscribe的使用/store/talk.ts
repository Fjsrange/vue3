import { defineStore} from 'pinia';
import axios from "axios";
import { nanoid } from "nanoid";

export const useTalkListStore = defineStore('talk', {
  state(){
    return {
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  },
  actions: {
    async getATalk(){
      // 发请求
      let res = await axios.get("https://api.uomg.com/api/rand/qinghau?format=json");
      // 连续解构赋值 + 重命名
      // let { data: { content: content }} = axios.get("https://api.uomg.com/api/rand/qinghau?format=json");
      console.log("res", res);
      /* if (res.code == 200) {
        // 把获取到的数据包装成一个obj对象
        let obj = { id: nanoid(), content: res.data.content };
        // let obj = { id: nanoid(), content };
        console.log("obj", obj);
        this.talkList.unshift(obj);
      } */
     let content = '我爱你，就像老鼠爱大米';
        let obj = { id: nanoid(), content };
        this.talkList.unshift(obj);
    }
  }
})