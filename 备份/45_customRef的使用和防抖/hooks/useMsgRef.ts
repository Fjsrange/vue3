import {customRef} from 'vue';

export default function(initValue:string, delay:number) {
  // 使用vue提供的customRef定义响应式数据
  let timer: number;
  // track(跟踪)、trigger（触发）
  let msg = customRef((track, trigger) => {
    return {
      // get何时调用？--- msg被读取时调用
      get() {
        track(); // 告诉vue数据msg很重要、要对msg进行持续关注
        return initValue;
      },
      // set何时调用？---msg被修改时调用
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initValue = value;
          trigger(); // 告诉vue，数据msg已经变了，需要更新页面
        }, delay);
      },
    };
  });
  return msg;
}