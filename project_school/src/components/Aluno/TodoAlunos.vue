<template>
  <div>
    <TituloShare texto="Aluno"/>
    <div>
      <input type="text" placeholder="Nome do Aluno" v-model="nome" v-on:keyup.enter="addAluno()">
      <button class="btn btnInput" @click="addAluno()">Adicionar</button>
    </div>
    
    <table v-if="alunos.length">
      <thead>
        <th>Mat.</th>
        <th>Nome</th>
        <th>Opções</th>
      </thead>
      <tbody>
        <tr v-for="(aluno, index) in alunos" :key="index">
          <td>{{aluno.id}}</td>
          <td>{{aluno.nome}}</td>
          <td><button class="btn btn_Danger" type="button" @click="remover(aluno)">Remover</button></td>
        </tr>
      </tbody>
      
    </table>
    <tfoot v-else>
          Nenhum Aluno encontrado
      </tfoot>
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
      titulo: 'Aluno',
      nome: '',
      alunos: [],
    }
  },
  created(){
    this.$http
    .get('http://localhost:3000/alunos')
    .then(res => res.json())
    .then(alunos => this.alunos = alunos)
  },
  props: {
  },
  methods: {
    addAluno() {
      let _aluno = {
        nome: this.nome,
        sobrenome: ""
      }
      this.$http
      .post('http://localhost:3000/alunos', _aluno)
      .then(res => res.json())
      .then(alunoRetornado => {
        this.alunos.push(alunoRetornado);
        this.nome = '';
      })
      

      this.nome = '';
      
      
    },
    remover(aluno){
      this.$http
      .delete(`http://localhost:3000/alunos/${aluno.id}`)
      .then(() => {
        this.$http
          .get('http://localhost:3000/alunos')
          .then(res => res.json())
          .then(alunos => this.alunos = alunos)
      })
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: calc(100% - 195px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: #687f7f;
  display: inline;
}
.btnInput {
  width: 150px;
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  display: inline;
  background-color: rgb(116, 115, 115);
}
.btnInput:hover {
  padding: 20x;
  margin: 0px;
  border: 0px;
}
</style>
