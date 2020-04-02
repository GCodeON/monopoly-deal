<template>
    <div class="deck">
      <!-- <div class="card" 
        v-for="(card, index) in cards" 
        :class="card.color" 
        :key="`key-${index}`">
        <span class="corner top">
          {{ card.value}}
        </span>
        <span class="number">
          {{ card.type }}
        </span>
        <span class="corner bottom">
          {{ card.value }}
        </span>
      </div> -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'



export default {
  props: [
    'cards'
  ],
  data() {
    return {
     
    };
  },
  mounted() {
   
  },
  computed: {
  

  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
  .deck {
    margin-left: 30px;
    padding-top: 30px;
    position: relative;
    display: inline-block;
  }
//   .card {
//     width         : 75px;
//     height        : 100px;
//     float         : left;
//     margin-right  : 5px;
//     margin-bottom : 5px;
//     border-radius : 2px;
//     position      : relative;
//     border        : 1px solid black;
//     box-shadow    : 2px 3px 5px 0 rgba(0,0,0,.2);

//     .corner {
//       width   : 100%;
//       display : block;
//     }

//     .top {
//       text-align   : left;
//       padding-left : 5px;
//     }

//     .bottom {
//       position     : absolute;
//       bottom       : 0px;
//       text-align   : left;
//       transform    : rotate(180deg);
//       padding-left : 5px;
//     }

//     .number {
//       width      : 100%;
//       position   : absolute;
//       top        : 38%;
//       text-align : center;
//     }
// }

</style>
