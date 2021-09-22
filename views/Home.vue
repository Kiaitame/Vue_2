<template>
    <div id="home">
      <h1>お客様の情報を入力してください</h1>
    <p>{{ msg_1 }}</p>
      <label><input type="radio" name="gender" id="man" value="男性" v-model="gender">男性</label>
      <label><input type="radio" name="gender" id="woman" value="女性" v-model="gender">女性</label>
    <p>{{ msg_2 }}</p>
      <select id="year" name="year" v-model="yearGetSet">
        <option v-for="y in years" :value="y.year" :key="y.year">{{ y.label }}</option>
      </select>年
      <select id="month" name="month" v-model="monthGetSet">{{ month }}
        <option v-for="m in 12" :value="m" :key="m">{{ m }}</option>
      </select>月
      <select id="day" name="day" v-model="dayGetSet">{{ day }}
            <option v-for="d in daysMax" :value="d" :key="d">{{ d }}</option>
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
        years: [],
        daysMax: [],
      }
    },
    created: function(){
      this.years = this.generate();
      this.countdays();
    },
    computed: {
      gender: {
        get(){
          return this.$store.getters.getgender;
        },
        set(value){
          this.$store.commit('setGender',value);
        }
      },
      yearGetSet: {
        get(){
          return this.$store.getters.getyear;
        },
        set(value){
          this.$store.commit('setYear',value);
        }
      },
      monthGetSet: {
        get(){
          return this.$store.getters.getmonth;
        },
        set(value){
          this.$store.commit('setMonth',value);
        }
      },
      dayGetSet: {
        get(){
          return this.$store.getters.getday;
        },
        set(value){
          this.$store.commit('setDay',value);
        }
      }
    },
    methods: {
      generate(){
        const years = [];
        const nowYear = new Date();
        for(let y= nowYear.getFullYear(); y>1920; y--){
          if(y>2018){
            years.push({year:y, label:`${y} (令和${y-2018}年)`});
          } else if (y>1988) {
            years.push({year:y, label:`${y} (平成${y-1988}年)`});
          } else if (y>1925) {
            years.push({year:y, label:`${y} (昭和${y-1925}年)`});
          } else if (y>1911) {
            years.push({year:y, label:`${y} (大正${y-1911}年)`});
          }
        }
        return years;
      },
      countdays(){
        const daysMax = [];
        this.daysMax = new Date(this.year,this.month,0).getDate();
        return daysMax;
      }
    }
  }
</script>
