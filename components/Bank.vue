<template>
    <div class="bank">
        <p class="total">Total: {{ bankTotal }}</p>
        <draggable group="card" 
          class="drag-bank" 
          draggable=".card"  
          v-model="cards" 
          :move="checkMove">
          <div v-for="(card, index) in cards"
						:key="index"
						class="card"
						:class="card.color">
						<span class="corner top" v-if="card.value">
							{{ card.value}}
						</span>
						<span class="center" v-if="card.type">
							{{ card.type }}
						</span>
						<span class="corner bottom" v-if="card.value" >
							{{ card.value }}
						</span>
					</div>
        </draggable>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  props: [
    'player'
  ],
  data() {
    return {
     
    };
  },
  mounted() {
    
  },
  computed: {
  
    cards: {
      get() {
        return this.$store.state.players[this.player.id].money;
      },
      set(value) {
        this.$store.commit('updateBank', { value: value, id: this.player.id})
      }
    },
    bankTotal: {
       get() {
        return this.$store.state.players[this.player.id].bankTotal;
      },
    }

  },
  methods: {
    ...mapActions([
        'onTurn'
    ]),
    checkMove(event) {

      if (event.from.className === 'drag-bank') {
        if(event.to.className === 'check-hand') {
          console.log("no bank to hand");
          return false;
        }
        if(event.to.className === 'discard-stack') {
          console.log("no bank to discard");
          return false;
        }
      } 

    },
  }
};
</script>

<style lang="scss" scoped>
  .drag-bank {
    width  : 100%;
    height : 100%;
  }
  .deck {
    position         : relative;
    margin           : 0 auto;
    // display          : flex;
    background-color : white;
    border           : 1px solid black;
    border-radius    : 25px;
    width            : 300px;
    height           : 400px;
  }
  .total {
    color: black;
  }

</style>
