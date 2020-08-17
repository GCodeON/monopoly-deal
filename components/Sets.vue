<template>
    <div class="sets">
      <div class="sets-container">
          <draggable v-for="(set, index) in data" :key="index" class="set" v-model="data" group="sets" @start="drag=true" @end="drag=false">
              <div class="pile">{{ set.color}}</div>
          </draggable>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Draggable } from 'vuedraggable';


export default {
  props: [
    'data'
  ],
  components: {
    Draggable
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
  }
};
</script>

<style lang="scss" scoped>
  .sets-container {
    display: flex; 
  }

</style>
