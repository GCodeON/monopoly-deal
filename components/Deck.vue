<template>
    <div class="deck pile" @click="draw">
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

</style>
