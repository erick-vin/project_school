<template>
  <div>
    <TituloShare texto="Professores" />
    <table v-if="professores.length">
      <thead>
        <th>Cód.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody>
        <tr v-for="(professor, index) in professores" :key="index">
          <td>{{ professor.id }}</td>
          <router-link to="/alunos" tag="td" style="cursor: pointer">
            {{ professor.nome }} {{ professor.sobrenome }}
          </router-link>
          <td>
            {{ professor.qtdAlunos }}
          </td>
        </tr>
      </tbody>
    </table>
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
      professores: [],
      Alunos: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/professores")
      .then((res) => res.json())
      .then((professor) => (this.professores = professor));
  },
  props: {},
  methods: {
    pegarQtdAlunosPorProfessor(){
      this.professores.forEach((professor, index) => {
        professor = {
          id: professor.id,
          nome: professor.nome,
          qtdAlunos: this.Alunos.filter()
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>