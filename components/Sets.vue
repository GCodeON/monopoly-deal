<template>
    <div class="sets">
			<draggable 
        class="sets-stack" 
        draggable=".card" 
        v-model="cards" 
        group="card" 
        :move="checkMove"
        :disabled="!enabled">
					<div v-for="(card, index) in cards"
						:key="index"
						class="card"
						:class="card.color">
						<span class="corner top">
							{{ card.value}}
						</span>
						<span class="center" v-if="card.type">
							{{ card.type }}
						</span>
						<span class="corner bottom" >
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
    'id',
  ],
  components: {
  },
  data() {
    return {
      enabled: true
      
    };
  },
  mounted() {
   
  },
  computed: {
    cards: {
		get() {
			return this.$store.state.players[this.id].sets;
		},
		set(value) {
			this.$store.commit('updateSets', { value: value, id: this.id})
		}
	}
  

  },
  methods: {
    // ...mapActions([
    // ]),

    checkMove(event) {

      // if (event.from.className === 'drag-bank') {
      //   if(event.to.className === 'check-hand') {
      //     console.log("no bank to hand");
      //     return false;
      //   }
      //   if(event.to.className === 'discard-stack') {
      //     console.log("no bank to discard");
      //     return false;
      //   }
      // } 

    },

  }
};
</script>

<style lang="scss" scoped>
  .sets-container {
    display: flex;
    width: 100%;
  }

</style>
