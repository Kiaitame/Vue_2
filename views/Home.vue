<template>
    <div id="home">
      <h1>お客様の情報を入力してください</h1>
    <p>{{ msg_1 }}</p>
      <label><input type="radio" name="gender" value="man">男性</label>
      <label><input type="radio" name="gender" value="woman">女性</label>
    <p>{{ msg_2 }}</p>
      <select id="year" name="year" v-model="year" v-on:change="countdays">
        <option v-for="nengo in nengos" :value="nengo.year" :key="nengo.year">{{ nengo.label }}</option>
      </select>年
      <select id="month" name="month" v-model="month" v-on:change="countdays">{{ month }}
        <option v-for="i in 12" :value="i" :key="i">{{ i }}</option>
      </select>月
      <select id="day" name="day" v-model="day">{{ day }}
            <option v-for="day in days_max" :value="day" :key="day">{{ day }}</option>
      </select>日<br>
      <router-link  to="/Insurance"><button>次へ進む</button></router-link>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg_1: '-性別-',
        msg_2: '-生年月日-',
        year: '2000',
        month: '1',
        day: '1',
        nengos: []
      }
    },
    created: function(){
      this.nengos = this.generate();
      this.countdays();
    },
    methods: {
      generate(){
        const nengos = [];
        let nowYear = new Date();
        for(let y= nowYear.getFullYear(); y>1920; y--){
          if(y>2018){
            nengos.push({"year":y,"label":`${y} (令和${y-2018}年)`});
          } else if (y>1988) {
            nengos.push({"year":y,"label":`${y} (平成${y-1988}年)`});
          } else if (y>1925) {
            nengos.push({"year":y,"label":`${y} (昭和${y-1925}年)`});
          } else if (y>1911) {
            nengos.push({"year":y,"label":`${y} (大正${y-1911}年)`});
          }
        }
        return nengos;
      },
      countdays: function(){
        this.days_max = new Date(this.year,this.month,0).getDate();
        return this.days_max;
      }
    }
  }
</script>
