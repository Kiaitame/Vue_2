<template>
    <div id="Insurance">
      <h1>以下にお応えください</h1>
    <div id="Insurance1" v-if="visible" v-on:click="show1">
    <p>{{ msg_1 }}</p>
      <label><input id="yes" type="radio" name="answer_1" value="はい" v-model="answer1">{{ yes }}</label>
      <label><input id="no" type="radio" name="answer_1" value="いいえ" v-model="answer1">{{ no }}</label>
    </div>
    <div id="Insurance2" v-if="visible2" v-on:click="show2">
    <p>{{ msg_2 }}</p>    
      <label><input id="yes" type="radio" name="answer_2" value="はい" v-model="answer2">{{ yes }}</label>
      <label><input id="no" type="radio" name="answer_2" value="いいえ" v-model="answer2">{{ no }}</label>
    </div>
    <div id="Insurance3" v-if="visible3">
    <p>{{ msg_3 }}</p>    
      <label><input id="yes" type="radio" name="answer_3" value="はい" v-model="answer3">{{ yes }}</label>
      <label><input id="no" type="radio" name="answer_3" value="いいえ" v-model="answer3">{{ no }}</label>
    </div>
      <br>
      <router-link  to="/"><button>前へ戻る</button></router-link>
      <router-link  to="/Question"><button>次へ進む</button></router-link>
    </div>
</template>

<script>
export default {
  name: 'Insurance',
  data(){
    return{
    yes:'はい',
    no:'いいえ',
    msg_1:'現在生命保険に加入されていますか？',
    msg_2:'現在、入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？',
    msg_3:'過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？',
    visible: true,
    visible2: false,
    visible3: false
  }
  },
  computed:{
    answer1: {
        get(){
          return this.$store.getters.getQA1;
        },
        set(value){
          this.$store.commit('setQa1',value);
        }
    },
    answer2: {
        get(){
          return this.$store.getters.getQA2;
        },
        set(value){
          this.$store.commit('setQa2',value);
        }
    },
    answer3: {
        get(){
          return this.$store.getters.getQA3;
        },
        set(value){
          this.$store.commit('setQa3',value);
        }
    }
  },
  methods:{
    show1() {
      this.visible2 = !this.visible2;
    },
    show2() {
      this.visible3 = !this.visible3;
    }
  }
}
</script>