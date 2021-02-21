<template>
      <div class="hand"> 
		<!-- <div class="stack" :class="{ active: isActive }" > -->
			<draggable group="card" draggable=".card" v-model="cards">
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
          <!-- </div> -->
      </div>
</template>

<script>
// import { mapGetters } from 'vuex'


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

  }
};
</script>

<style lang="scss" scoped>
	.hand {
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
