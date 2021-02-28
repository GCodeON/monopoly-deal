<template>
      <div class="cards" :class="role"> 
		<!-- <div class="stack" :class="{ active: isActive }" > -->
			<draggable group="card" class="check-hand" draggable=".card" v-model="cards" :move="checkMove">
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
          <!-- </div> -->
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'



export default {
  props: [
    'id', 'role'
  ],
  components: {

  },
  data() {
    return {
	  isActive: false,
    };
  },
  mounted() {
	
  },
  computed: {

	cards: {
		get() {
			return this.$store.state.players[this.id].hand;
		},
		set(value) {
			this.$store.commit('updateHand', { value: value, id: this.id})
		}
	}


  },
  methods: {
	...mapActions([
	  'onTurn'
	]),
	checkMove(event) {
	
		if(event.from.className === 'check-hand') {

			if(event.to.className === 'check-hand') {
				// console.log("no hand to hand");
				return false;
			}

			if(event.to.className === 'discard-stack') {
				// console.log("hand to discard", event);
				if(event.draggedContext.element.type === 'action') {
					// console.log("not an action card");
					alert(event.draggedContext.element.description);
					// execute action
				} else {
					return false;
				}
			}
			if(event.to.className === 'drag-bank') { 
				if(event.draggedContext.element.type === 'property' || event.draggedContext.element.type === 'wild') {
					console.log("no property in the bank");
					return false;
				}
			}
			if(event.to.className === 'sets-stack') { 
				if(event.draggedContext.element.type === 'money' || event.draggedContext.element.type === 'action') {
					console.log("no property in the bank");
					return false;
				}
			}
		} 
		this.onTurn();
	},
	// onStart(evt) {
	// 	console.log("on start", evt);
	// }

  }
};
</script>

<style lang="scss" scoped>
	.cards {
		animation : 3s appear;
		margin: 0 auto;
	}

	.stack {
		display: flex;
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
