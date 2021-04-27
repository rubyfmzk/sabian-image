<template>
  <div id="Symbols">
    <h1 v-html="sign_degree"></h1>
    <h1 v-html="symbol"></h1>
    <img :src="get_img($route.params.sign, $route.params.degree)" id="main_image" :alt="symbol">

    <h2>Download</h2>
    <div id="download">
      <a :href="get_img($route.params.sign, $route.params.degree, 90)" :download="$route.params.sign+$route.params.degree+'.jpg'" target="_blank">90px</a>
      <a :href="get_img($route.params.sign, $route.params.degree)" :download="$route.params.sign+$route.params.degree+'.jpg'" target="_blank">480px</a>
      <a :href="get_img($route.params.sign, $route.params.degree, 1080)" :download="$route.params.sign+$route.params.degree+'.jpg'" target="_blank">1080px</a>
    </div>

    <h2>Sabian Symbols for this Zodiac sign</h2>
    <div id="same_sign_images">
      <div v-for="degree of 30" :key="degree" :style="{'background-image':'url('+get_img($route.params.sign, degree, 90)+')'}" @click="to_symbol($route.params.sign, degree)"></div>
    </div>

    <h2>Other Signs</h2>
    <div class="signs" v-for="i in define.SIGN_LIST" :key="i.key">
      <router-link :to="{name:'symbol', params:{sign:i.key, degree:$route.params.degree}}">
        <img :src="'/img/sign/'+i.key+'.svg'" class="icon">
        {{i.key}}
      </router-link>
    </div>

    <h2>Find your Sabian Symbols</h2>
    <p>
      You can find your Sabian Symbols here: <a href="https://mini.sabian-calculator.com">Sabian Calculator Mini</a>
    </p>

    <h2>What is allowed?</h2>
    <ul id="allowed">
      <li>All images are free to use. Attribution is not required. Usage example is <a href="https://www.jamesburgess.com/a-woman-rises-out-of-water-a-seal-rises-and-embraces-her.html" target="_blank">here</a>.</li>
      <li>Please contact me for commercial use.</li>
    </ul>

    <h2>Contact Ruby Fumizki</h2>
    <ul id="contact">
      <li><a href="https://www.instagram.com/rubyfmzk/" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com/rubyfumizki" target="_blank">Twitter</a></li>
    </ul>

    <ComponentFooter></ComponentFooter>
  </div>
</template>

<script>
import ComponentFooter from '@/components/ComponentFooter.vue'
import Mixin from '@/components/Common'
import define from '@/assets/js/define'

export default {
  name: 'Symbol',
  mixins:[Mixin],
  props: {
    current: Object,
  },
  components: {
    ComponentFooter,
  },
  data() {
    return {
      sign_degree: this.$route.params.sign + ' ' + this.$route.params.degree,
      symbol: (this.$route.params.sign+this.$route.params.degree).getSabian(),
      img_dir: define.IMG_BASE_URL,
      define: define,
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
      this.sign_degree = this.$route.params.sign + ' ' + this.$route.params.degree
      this.symbol = (this.$route.params.sign+this.$route.params.degree).getSabian()
    }
  },
  methods:{
    get_img(sign, degree, size=480){
      if(sign.match(/^[a-zA-Z]+$/)){
        sign = sign.getSignNumber() + 1
      }

      sign = sign.zeroPadding(2);
      degree = degree.zeroPadding(2)
      let size_text = size === 480 ? '' : size + 'px/'
      return define.IMG_BASE_URL + size_text + sign + '/' + degree + '.jpg'
    },

    to_symbol(sign, degree){
      this.$router.push({ name: 'symbol', params: {sign: sign, degree:degree}})
    },
  }
}

</script>

<style>
#Symbols{
    text-align: center;
}
footer{
    margin: 100px 0 0;
}
h1{
    padding: 100px 20px 5vw;
    font-size: 32px;
    line-height: 1.2;
}
h1 + h1{
    padding: 0 20px 100px;
}

h2{
    margin: 100px 0 20px;
}

#main_image{
    max-width: 100vw;
}

#download a{
    margin: 0 20px;
}

.signs{
    display: inline-block;
    width: 30vw;
}

.signs .icon{
    width: 12px;
}

#same_sign_images{
    width: 100vw;
}

#same_sign_images > div{
    width: 6.66vw;
    height: 6.66vw;
    background-size: contain;
    display: inline-block;
    vertical-align: bottom;
}
@media (max-width: 767px){
  #same_sign_images > div{
    width: 20vw;
    height: 20vw;
  }
}

#contact li{
    display: inline-block;
    margin: 0 20px;
}

</style>