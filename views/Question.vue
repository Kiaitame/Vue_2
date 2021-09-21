<template>
  <div class="question">
    <h1>ご相談内容をご記入ください</h1>
    <p>{{ msg_1 }}</p>
    <textarea id="msg" v-model="question"></textarea>
    <br>
    <router-link to="/Insurance"><button>前へ戻る</button></router-link>
    <router-link to="/Result"><button>次へ進む</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data(){
    return {
      msg_1:'-ご相談内容-',
    }
  },
  computed:{
    question: {
      get(){
          return this.$store.getters.getquestion;
        },
      set(value){
        this.$store.commit('setQuestion',value);
      }
    }
  }
}
</script>
