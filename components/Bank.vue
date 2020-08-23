<template>
    <div class="bank">
      <h2>Bank</h2>
        <draggable group="card" >
          <transition-group>
            <div class="pile"></div>
          </transition-group>
        </draggable>
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
  

  },
  methods: {
    ...mapActions([
        'draw'
    ]),
  }
};
</script>

<style lang="scss" scoped>
  .bank {
    
  }

</style>
