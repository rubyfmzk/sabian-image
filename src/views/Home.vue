<template>
  <div>
    <div id="images">
      <template v-for="sign of 12">
        <div  v-for="degree of 30" :key="sign+','+degree" :style="{'background-image':'url('+get_img(sign, degree)+')'}" @click="to_symbol(sign-1, degree)"></div>
      </template>
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
      img_dir: define.IMG_BASE_URL,
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
#images{
    width: 100vw;
}
#images > div{
    width: 6.66vw;
    height: 6.66vw;
    background-size: contain;
    display: inline-block;
    vertical-align: bottom;
}
@media (max-width: 767px){
  #images > div{
    width: 11.11vw;
    height: 11.11vw;
  }
}
</style>