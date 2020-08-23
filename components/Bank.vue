<template>
    <div class="bank pile">
      <h2>Bank</h2>
        <draggable group="hand" >
          <transition-group>

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
