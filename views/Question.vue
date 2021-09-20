<template>
  <div class="question">
    <h1>ご相談内容をご記入ください</h1>
    <p>{{ msg_1 }}</p>
    <textarea id="msg"></textarea>
    <br>
    <router-link to="/Insurance"><button>前へ戻る</button></router-link>
    <router-link to="/Result"><button v-on:click="getMsg">次へ進む</button></router-link>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'Question',
  data(){
    return {
      msg_1:'-ご相談内容-',
    }
  },
  methods:{
    getMsg(){
      const val = document.getElementById('msg').value;
      store.commit('setQuestion',val);
    }
  }
}
</script>
