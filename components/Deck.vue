<template>
    <div class="deck" @click="draw">
      <div class="stack">
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'



export default {
  props: [
    'cards'
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
  .deck {
    position         : relative;
    margin           : 0 auto;
    display          : flex;
    background-color : white;
    border           : 1px solid black;
    border-radius    : 25px;
    width            : 300px;
    height           : 400px;
  }

</style>
