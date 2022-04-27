<template>
    <div>
        <TituloShare texto="Professores"/>
        <table v-if="professores.length">
      <thead>
        <th>Cód.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody>
        <tr v-for="(professor, index) in professores" :key="index">
          <td>{{professor.id}}</td>
          <td>{{professor.nome}}</td>
          <td>3</td>
        </tr>
      </tbody>
      
    </table>
    </div>
</template>

<script>
import TituloShare from "../_share/TituloShare.vue";
    export default {
        components:{
            TituloShare
        },
        data(){
            return{
                professores:[
                    {id: 1, nome: 'Erick'},
                    {id: 2, nome: 'Vinicius'},
                    {id: 3, nome: 'Santos'}
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>