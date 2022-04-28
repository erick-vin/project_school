<template>
  <div>
    <TituloShare :texto="`Aluno: ${aluno.nome}`" />
  </div>
</template>

<script>
import TituloShare from "../_share/TituloShare.vue";
export default {
  components: {
    TituloShare,
  },
  data() {
    return {
      aluno: {},
    };
  },
  methods: {
      
  },
};
</script>

<style lang="scss" scoped>
</style>