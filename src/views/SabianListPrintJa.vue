<template>
  <div>
    <div id="sabian-list-print-ja">
      <div class="print">
        <h1>サビアンシンボル一覧 (PDF用 / 印刷用)</h1>
        <input type="button" value="PDFにする / 印刷する" onclick="window.print();">
      </div>

      <div class="page-wrap" v-for="sign_key of 12" :key="sign_key">
        <div class="page" v-for="sign_key2 of 2" :key="sign_key2">
          <h2 class="" v-html="signs[sign_key-1] + ' ('+((sign_key2-1)*15+1)+'〜'+(sign_key2*15)+'度)'"></h2>
          <ul>
            <li v-for="degree in 15" :key="degree">
            <img :src="get_img(sign_key,degree+(sign_key2-1)*15)">
            <p class="title">
              <span class="degree">{{signs[sign_key-1]}}{{degree+(sign_key2-1)*15}}度</span>
              <span v-html="((sign_key-1)*30+(sign_key2-1)*15+degree-1).getSabianJa()"></span>
            </p>
            <p class="date">可能性がある日付:<br><span v-html="((sign_key-1)*30+(sign_key2-1)*15+degree-1).getDateJa()"></span></p>
            <p class="description">シンボルのテーマ: <span v-html="((sign_key-1)*30+(sign_key2-1)*15+degree-1).getSabianTextJa()"></span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/components/Common'
import define from '@/assets/js/define'


export default {
  name: 'Home',
  mixins:[Mixin],
  props: {
    current: Object,
  },
  components: {

  },
  data () {
    return {
      signs:[
        "牡羊座",
        "牡牛座",
        "双子座",
        "蟹座",
        "獅子座",
        "乙女座",
        "天秤座",
        "蠍座",
        "射手座",
        "山羊座",
        "水瓶座",
        "魚座",
      ],
    }
  },

  created() {
  },
  mounted(){
    console.log(define.IMG_BASE_URL)
  },
  destroyed() {
  },
  watch:{
    '$route': function(to){
      console.log(to)
    }
  },
  methods:{
    get_img(sign, degree){
      sign = sign.zeroPadding(2);
      degree = degree.zeroPadding(2);
      return define.IMG_BASE_URL + '90px/' + sign + '/' + degree + '.jpg';
    },

    to_symbol(sign, degree){
      this.$router.push({ name: 'symbol', params: {sign: sign.getSign(), degree:degree}})
    },
  }
}

</script>

<style>
@media print {
  #sabian-list-print-ja{
    size: A4 portrait;
    margin: 5mm;
  }
  #sabian-list-print-ja .print{
    display: none;
  }
}
#sabian-list-print-ja{
  font: 500 1.4rem/1.6 "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
}
#sabian-list-print-ja .page{
  page-break-after: always;
}
#sabian-list-print-ja .page-wrap:last-child .page{
  page-break-after: avoid;
}
#sabian-list-print-ja .print{
    text-align: center;
    margin: 50px 0;
}
#sabian-list-print-ja .print input{
    max-width: 200px;
    padding: 5px;
}
#sabian-list-print-ja li {
  position: relative;
  margin: 9px 0;
}

#sabian-list-print-ja img{
  width: 90px;
}
#sabian-list-print-ja .title{
  font-size: 15px;
  top: 0;
  font-weight: 700;
}

#sabian-list-print-ja .date{
  top: 60px;
  font-size: 13px;
}

#sabian-list-print-ja .description{
  top: 40px;
  font-size: 13px;
}

/* レイアウトバージョン2 */
#sabian-list-print-ja h2 {
    text-align: center;
    margin: 20px 0 30px 0;
    font-size: 24px;
    font-family: 'EB Garamond', serif;
}

#sabian-list-print-ja li {
  position: relative;
  margin: 9px 1%;
  height: 170px;
  width: 31.3%;
  display: inline-block;
}

#sabian-list-print-ja img{
  width: 90px;
}

#sabian-list-print-ja p{
  position: absolute;
  left: 0px;
  line-height: 1.3em;
}

#sabian-list-print-ja .title{
  font-size: 13px;
  line-height: 1.3em;
  top: 0px;
  left: 100px;
  font-weight: 300;
}

#sabian-list-print-ja .title .degree{
    font-size: 15px;
    display: block;
    margin: 0 0 8px 0;
    font-weight: 700;
}

#sabian-list-print-ja .date{
  top: 100px;
  font-size: 12px;
}

#sabian-list-print-ja .description{
  top: 140px;
  font-size: 12px;
}
</style>