import { defineStore} from 'pinia';

export const useTalkListStore = defineStore('talk', {
  state(){
    return {
      talkList: [
        { id: 1, content: "我爱你，就像老鼠爱大米" },
        { id: 2, content: "你是我生命中最美的风景，让我无法抗拒地爱上了你。" },
        { id: 3, content: "你是我心中的唯一，我愿意用我的一生来守护你。" },
      ]
    }
  }
})