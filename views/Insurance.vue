<template>
    <div id="Insurance">
      <h1>以下にお応えください</h1>
    <p>{{ msg_1 }}</p>
      <label><input id="yes" type="radio" name="answer_1" value="はい" v-model="visible" v-on:change="getAnswer1">{{ yes }}</label>
      <label><input id="no" type="radio" name="answer_1" value="いいえ" v-model="visible" v-on:change="getAnswer1">{{ no }}</label>
    <div id="Insurance2" v-if="visible">
    <p>{{ msg_2 }}</p>    
      <label><input id="yes" type="radio" name="answer_2" value="はい" v-model="visible2" v-on:change="getAnswer2">{{ yes }}</label>
      <label><input id="no" type="radio" name="answer_2" value="いいえ" v-model="visible2" v-on:change="getAnswer2">{{ no }}</label>
    </div>
    <div id="Insurance3" v-if="visible2">
    <p>{{ msg_3 }}</p>    
      <label><input id="yes" type="radio" name="answer_3" value="はい" v-on:change="getAnswer3">{{ yes }}</label>
      <label><input id="no" type="radio" name="answer_3" value="いいえ" v-on:change="getAnswer3">{{ no }}</label>
    </div>
      <br>
      <router-link  to="/"><button>前へ戻る</button></router-link>
      <router-link  to="/Question"><button>次へ進む</button></router-link>
    </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'Insurance',
  data(){
    return{
    yes:'はい',
    no:'いいえ',
    msg_1:'現在生命保険に加入されていますか？',
    msg_2:'現在、入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？',
    msg_3:'過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？',
    visible: false,
    visible2: false
  }
  },
  methods: {
      getAnswer1(){
        const element = document.getElementsByName('answer_1');
        const len = element.length;
        for(let i = 0; i < len; i++){
          if(element[i].checked){
            const val = element[i].value;
            store.commit('setQa1',val);
          }
        }
      },
      getAnswer2(){
        const element = document.getElementsByName('answer_2');
        const len = element.length;
        for(let i = 0; i < len; i++){
          if(element[i].checked){
            const val = element[i].value;
            store.commit('setQa2',val);
          }
        }
      },
      getAnswer3(){
        const element = document.getElementsByName('answer_3');
        const len = element.length;
        for(let i = 0; i < len; i++){
          if(element[i].checked){
            const val = element[i].value;
            store.commit('setQa3',val);
          }
        }
      },
    }
}
</script>