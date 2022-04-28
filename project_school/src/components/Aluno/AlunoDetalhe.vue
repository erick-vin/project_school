<template>
  <div>
    <TituloShare :texto="`Aluno: ${aluno.nome}`" />
    <table>
        <tbody>
            <tr>
                <td class="colPequeno">Matrícula:</td>
                <td>
                    <label for="">{{aluno.id}}</label>
                    <input v-model="aluno.id" type="text"/>
                </td>
            </tr>
            <tr>
                <td class="colPequeno">Nome:</td>
                <td>
                    <label for="">{{aluno.nome}}</label>
                    <input v-model="aluno.nome" type="text"/>
                </td>
            </tr>
            <tr>
                <td class="colPequeno">Sobrenome:</td>
                <td>
                    <label for="">{{aluno.sobrenome}}</label>
                    <input v-model="aluno.sobrenome" type="text"/>
                </td>
            </tr>
            <tr>
                <td class="colPequeno">Data Nascimento:</td>
                <td>
                    <label for="">{{aluno.dataNasc}}</label>
                    <input v-model="aluno.dataNasc" type="text"/>
                </td>
            </tr>
            <tr>
                <td class="colPequeno">Professor:</td>
                <td>
                    <label for="">{{aluno.professor.nome}}</label>
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
      aluno: {},
      idAluno: this.$route.params.id
    };
  },
  created() {
      this.$http
        .get("http://localhost:3000/alunos/" + this.idAluno)
        .then((res) => res.json())
        .then((aluno) => (this.aluno = aluno));
  },
  methods: {
      
  },
};
</script>

<style lang="scss" scoped>
</style>