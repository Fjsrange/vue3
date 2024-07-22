import {defineStore} from 'pinia';

export const useCountStore = defineStore('count', {
  state(){
    return {
      sum: 6,
      school: 'atguigu',
      address: '北京'
    }
  },
  // actions里面放置的是一个个的动作方法，用于响应组件中的“动作”
  actions:{
    increment(value:any){
      console.log('incrementincrement', value)
      // this 是当前的 store 实例，可以直接使用 this.$state 访问 state
      this.$state.sum += value;
    }
  },
  getters: {
    bigSum: state => state.sum * 10,
    upperSchool():string{
      return this.school.toUpperCase()
    }
  }
})