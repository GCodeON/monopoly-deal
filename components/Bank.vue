<template>
    <div class="bank">
        <draggable group="card" class="drag-bank" draggable=".card"  v-model="cards">
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
    'id'
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
        return this.$store.state.players[this.id].money;
      },
      set(value) {
        this.$store.commit('updateBank', { value: value, id: this.id})
      }
    }

  },
  methods: {
    ...mapActions([
        // 'draw'
    ]),
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

</style>
