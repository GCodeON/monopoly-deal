<template>
    <div class="bank">
        <draggable group="card" class="drag-bank">
          <transition-group>

          </transition-group>
        </draggable>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  props: [
    'money'
  ],
  data() {
    return {
     
    };
  },
  mounted() {
   
  },
  computed: {
  

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

</style>
