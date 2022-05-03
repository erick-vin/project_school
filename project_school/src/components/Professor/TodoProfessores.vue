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
          <td class="colPequeno">{{ professor.id }}</td>
          <router-link v-bind:to="'/alunos/' + professor.id" tag="td" style="cursor: pointer">
            {{ professor.nome }}
          </router-link>
          <td class="colPequeno">
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
    .get('http://localhost:5000/api/aluno')
    .then(res => res.json())
    .then(alunos => {
      this.Alunos = alunos;
      this.carregarProfessores();
      
      })
  },
  props: {},
  methods: {
    pegarQtdAlunosPorProfessor(){
      this.professores.forEach((professor, index) => {
        professor = {
          id: professor.id,
          nome: professor.nome,
          qtdAlunos: this.Alunos.filter(aluno => aluno.professor.id == professor.id).length
        }
        this.professores[index] = professor
      })
    },
    carregarProfessores(){
      this.$http
      .get("http://localhost:5000/api/professor")
      .then((res) => res.json())
      .then((professor) => {
        this.professores = professor
        this.pegarQtdAlunosPorProfessor();
      });
    }
    
  }
};
</script>

<style scoped>
.colPequeno {
  text-align: center;
  width: 15%;
}
</style>