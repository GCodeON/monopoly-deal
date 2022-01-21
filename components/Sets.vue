<template>
    <div class="sets">
			<draggable 
        class="property-sets" 
        draggable=".card" 
        v-model="sets" 
        group="card" 
        ghost-class="ghost-card"
        :move="checkMove"
        :animation="200" 
        :disabled="!player.active"
      >
        <div class="stack-container" v-for="(set, idx) in sets" :key="idx">
          <draggable 
          class="property-stack" 
          draggable=".card" 
          group="card" 
          ghost-class="ghost-card"
          :move="checkMove"
          :animation="200" 
          :disabled="!player.active"
        >
					<div 
          	class="card"
            :class="card.color"
            v-for="card in set"
						:key="card.id"
          >
						<span class="corner top">
							{{ card.value}}
						</span>
						<span class="center" v-if="card.type">
							{{ card.type }}
						</span>
						<span class="corner bottom">
							{{ card.value }}
						</span>
					</div>
        </draggable>
        </div>
        
			</draggable>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  props: [
    'player',
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
    // cards: {
    //   get() {
    //     return this.$store.state.players[this.player.id].properties;
    //   },
    //   set(value) {
    //     this.$store.commit('updateProperties', { value: value, id: this.player.id})
    //   }
    // },
    sets: {
      get() {
        return this.$store.state.players[this.player.id].sets;
      },
      set(value) {
        this.$store.commit('newSet', { properties: value, id: this.player.id})
      }
    }
  },
  methods: {
    // ...mapActions([
    // ]),

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
  .property-sets {
    display: flex;
    width: 100%;
    min-height: 125px;
  }
  .property-stack {
    display: flex;
    flex-direction: column;
  }

</style>
