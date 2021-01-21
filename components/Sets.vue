<template>
    <div class="sets">
      <div class="sets-container">
          <!-- <draggable v-for="(set, index) in data" :key="index" class="set" v-model="data" group="sets" @start="drag=true" @end="drag=false">
              <div class="pile" v-if="set.color">{{ set.color}}</div>
          </draggable> -->
        <draggable group="card" draggable=".card" :list="data" @change="log">
          <transition-group>
              <div v-for="card in data"
                :key="card"
                class="card"
                :class="card.color">
                <span class="corner top">
                  {{ card.value}}
                </span>
                <span class="center">
                  {{ card.type }}
                </span>
                <span class="corner bottom">
                  {{ card.value }}
                </span>
              </div>
            </transition-group>
        </draggable>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  props: [
    'data', 'name'
  ],
  components: {
  },
  data() {
    return {
      drag: false
    };
  },
  mounted() {
   
  },
  computed: {
  

  },
  methods: {
    // ...mapActions([
    // ]),
    log(evt) {
      console.log("on log", evt);
    }
  }
};
</script>

<style lang="scss" scoped>
  .sets-container {
    display: flex;
    width: 100%;
  }

</style>
