 import { createSlice } from '@reduxjs/toolkit';

    //la tranche (slice) pour  gérer les taches
const Taskslice = createSlice({
    name:'tasks',//l'identifiant dans le store de redux
    initialState: {tasklist:[]},//tableau vide comme etat inital
    //!on definis les reducers qui gereront les actions
    reducers:{
        addTask:(state , action) =>{
            state.tasklist.push(action.payload)//push pour ajouter ala fin du tableau tasklist
        },
        removeTask:(state, action) =>{
            state.tasklist = state.tasklist.filter(tasks => tasks?.id !== action.payload?.id)
            //le tableau recois le filter qui renvoie une copie du tableau avec la condition
        },
        toggleStatus:( state, action ) => {
            const updatedAt = (new Date().toLocaleString())
            state.tasklist = state.tasklist.map(task => task.id === action.payload.id ? { ...task, isDone: true, updatedAt } : task)
        },
        // !le edittask n'a pas encore été implémenté
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const tasks = state.taskList.find(tasks => tasks.id === id); 
            if (tasks) {
              tasks.description = description; // Mettre à jour la description de la tâche
            }
          },
    }
})
const {actions, reducer} =Taskslice;
export const { addTask , removeTask , toggleStatus , editTask} =actions ;
export default reducer ;