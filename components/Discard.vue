<template>
    <div class="discard">
      <div class="stack">
        <draggable group="card" class="drag-discard" draggable=".card"  v-model="cards" :move="checkMove">
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
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'



export default {
  props: [
    ''
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
          return this.$store.state.discarded;
        },
        set(value) {
          this.$store.commit('playCard', { value: value});
        }
      }
  },
  methods: {
    ...mapActions([

    ]),
    checkMove(event){
        return false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .discard {
    position         : relative;
    margin           : 0 auto;
    // display          : flex;
    background-color : white;
    border           : 1px solid black;
    border-radius    : 25px;
    max-width            : 200px;
    height           : 200px;

    .card {
      position: absolute;
    }
  }

</style>
