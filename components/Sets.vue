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
        <!-- <div class="stack-container" > -->
          <draggable 
          v-for="(set, idx) in sets" :key="idx"
          v-model="sets"
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
        <!-- </div> -->
        
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

    };
  },
  mounted() {
   
  },
  computed: {
    moveType: {
      get() {
        return this.$store.state.moveType;
      },
      set(value) {

      }
    },
    sets: {
      get() {
        return this.$store.state.players[this.player.id].sets;
      },
      set(value) {
        console.log('property set update', value)
        switch(this.moveType) {
          case 'property-stack':
            // add to property stack
            console.log('add to property stack');
          break
          case 'property-set':
            // add new property set
            console.log('add new property set');
          break
        }
      }
    },
  },
  methods: {
    checkMove(event) {
      console.log('check set event', event);
      if (event.from.className === 'property-sets' || event.from.className === 'property-stack') {
        if(event.to.className === 'check-hand') {
          console.log("no property to hand");
          return false;
        }
        if(event.to.className === 'discard-stack') {
          console.log("no property to discard");
          return false;
        }
        if(event.to.className === 'property-stack') {
          console.log('update move to property stack');
          this.$store.commit('updateMoveType', 'property-stack')
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
