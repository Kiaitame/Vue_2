<template>
    <div id="Result">
      <h1>以下の内容をご確認ください</h1>
    <p>{{ msg_1 }}</p>
    <div><ul><li>{{ Gender }}</li></ul></div>
    <p>{{ msg_2 }}</p>
    <ul><li>{{ year }}年{{ month }}月{{ day }}日</li></ul>
    <p>{{ msg_3 }}</p>
    <ul><li>{{ ansWer1 }}</li></ul>
    <p>{{ msg_4 }}</p>
    <ul><li>{{ ansWer2 }}</li></ul>
    <p>{{ msg_5 }}</p>
    <ul><li>{{ ansWer3 }}</li></ul>
    <p>{{ msg_6 }}</p>
    <ul><li>{{ quesTion }}</li></ul>
    </div>
</template>

<script>
export default {
  name: 'Result',
  data(){
    return{
      msg_1: '-性別-',
      msg_2: '-生年月日-',
      msg_3: '-現在生命保険に加入されていますか？-',
      msg_4: '-現在、入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-',
      msg_5: '-過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-',
      msg_6: '-ご相談内容-'
  }
  },
  computed: {
    Gender:{
      get(){
      return this.$store.getters.getgender;
      }
    },
    year:{
      get(){
      return this.$store.getters.getyear;
      }
    },
    month:{
      get(){
      return this.$store.getters.getmonth;
      }
    },
    day:{
      get(){
      return this.$store.getters.getday;
    }
    },
    ansWer1:{
      get(){
      return this.$store.getters.getQA1;
      }
    },
    ansWer2:{
      get(){
      return this.$store.getters.getQA2;
      }
    },
    ansWer3:{
      get(){
      return this.$store.getters.getQA3;
      }
    },
    quesTion:{
      get(){
      return this.$store.getters.getquestion;
      }
    }
  }
}
</script>
<style>
  li {
    list-style: none;
  }
</style>