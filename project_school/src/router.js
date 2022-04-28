import Vue from 'vue';
import Router from 'vue-router';
import TodoAlunos from './components/Aluno/TodoAlunos.vue';
import TodoProfessores from './components/Professor/TodoProfessores.vue';
import TodoSobre from './components/Sobre/TodoSobre.vue';
import AlunoDetalhe from './components/Aluno/AlunoDetalhe.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/professores',
            nome: 'Professores',
            component: TodoProfessores
        },
        {
            path: '/alunos/:prof_id',
            nome: 'Alunos',
            component: TodoAlunos
        },
        {
            path: '/alunosall',
            nome: 'Alunos',
            component: TodoAlunos
        },
        {
            path: '/alunoDetalhe/:id',
            nome: 'AlunoDetalhe',
            component: AlunoDetalhe
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: TodoSobre
        }
    ]
})