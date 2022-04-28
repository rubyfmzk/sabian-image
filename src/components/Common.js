import define from '@/assets/js/define'
import sabian_list from '@/assets/yml/sabian.yml'
import sabian_ja_list from '@/assets/yml/sabian_ja.yml'
import sabian_text_ja_list from '@/assets/yml/sabian_text_ja.yml'
import date_ja_list from '@/assets/yml/date_ja.yml'
export default{
  created(){
    Number.prototype.abs = function(){
      return Math.abs(this)
    }

    String.prototype.abs = function(){
      return parseFloat(this).abs()
    }

    Number.prototype.getSabian = function(){
      return sabian_list[this]
    }

    String.prototype.getSabian = function(){
      let strs = this.match(/([A-Za-z]+)(\d+)/)
      console.log(strs)
      let num = strs[1].getSignNumber() * 30 + strs[2].int() - 1
      return sabian_list[num]
    }

    Number.prototype.getSabianJa = function(){
      return sabian_ja_list[this]
    }

    Number.prototype.getSabianTextJa = function(){
      return sabian_text_ja_list[this]
    }

    Number.prototype.getDateJa = function(){
      return date_ja_list[this]
    }

    Number.prototype.getSign = function(){
      return define.SIGN_LIST[this] ? define.SIGN_LIST[this].key : 'Aries'
    }

    String.prototype.getSignNumber = function(){
      const this_sign = this.toUpperCase()
      const sign_list = {
        ARIES:0,
        TAURUS:1,
        GEMINI:2,
        CANCER:3,
        LEO:4,
        VIRGO:5,
        LIBRA:6,
        SCORPIO:7,
        SAGITTARIUS:8,
        CAPRICORN:9,
        AQUARIUS:10,
        PISCES:11
      }
      const sign_num = sign_list[this_sign]
      return (sign_num === null || sign_num === undefined) ? 0 : sign_num
    }

    Number.prototype.int = function(){
      return parseInt(this)
    }

    String.prototype.int = function(){
      return parseInt(this)
    }

    Number.prototype.intAbs = function(){
      return Math.abs(this).int()
    }

    String.prototype.intAbs = function(){
      return parseFloat(this).intAbs()
    }

    Number.prototype.zeroPadding = function(digit){
      var zero = "";
      for(var i=1; i<digit; i++){
        zero += "0";
      }
      return (zero + this).substr(-digit);
    }

    String.prototype.zeroPadding = function(digit){
      return this.int().zeroPadding(digit)
    }
  },

  methods: {

    $$(selector){
      return document.querySelector(selector);
    },

    $$$(selector){
      return document.querySelectorAll(selector);
    },
  }
}
