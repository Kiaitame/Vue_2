<template>
    <div id="Insurance">
      <h1>以下にお応えください</h1>
    <p>{{ msg_1 }}</p>
      <label><input type="radio" name="answer_1" value="yes" v-model="visible">{{ yes }}</label>
      <label><input type="radio" name="answer_1" value="no" v-model="visible">{{ no }}</label>
    <div id="Insurance2" v-if="visible">
    <p>{{ msg_2 }}</p>    
      <label><input type="radio" name="answer_1" value="yes" v-model="visible2">{{ yes }}</label>
      <label><input type="radio" name="answer_1" value="no" v-model="visible2">{{ no }}</label>
    </div>
    <div id="Insurance3" v-if="visible2">
    <p>{{ msg_3 }}</p>    
      <label><input type="radio" name="answer_1" value="yes">{{ yes }}</label>
      <label><input type="radio" name="answer_1" value="no">{{ no }}</label>
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
    visible: false,
    visible2: false
  }
  }
  // methods: {
  //     Insurance: function(){
  //       this.$router.push('/Insurance')
  //     }
  //   }
}
</script>