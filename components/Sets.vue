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
          :id="`set-${idx}`"
          draggable=".card" 
          group="card" 
          ghost-class="ghost-card"
          :move="checkMove"
          :animation="200" 
          :disabled="!player.active"
        >
					<div 
            v-for="card in set"
            class="card"
            :class="card.color"
            :id="`card-${card.id}`"
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
        return this.$store.state.eventType;
      },
      set(value) {

      }
    },
    moveItem: {
      get() {
        return this.$store.state.eventItem;
      },
      set(value) {

      }
    },
    sets: {
      get() {
        return this.$store.state.players[this.player.id].sets;
      },
      set(value) {
        switch(this.moveType) {
          case 'property-stack':
            // add to property stack
            // console.log('stack to stack move', this.moveItem);
            // this.$store.commit('toStack', {id: this.player.id});
            // this.$store.commit('updateSet', {property: property, id: this.player.id});
          break
          case 'property-sets':
            // add new property set
            console.log('new set', this.moveItem);
            // this.$store.commit('addSet', {property: this.moveItem.element, id: this.player.id});
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
        if(event.to.className === 'drag-bank') {
          console.log("no property to bank");
          return false;
        }
        if(event.to.className === 'property-stack') {
          console.log('stack to stack');

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
