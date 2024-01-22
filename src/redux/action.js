const addTodoAction=((todo)=>{
    return{
        type:"ADD_TODO",
        todo
    }

})

const editTodoAction=((todo)=>{
    return{
        type:"EDIT_TODO",
        todo
    }
})

const deleteTodoAction=((id)=>{
    return {
        type: "DELETE_TOFO",
        id
        }

})

export default {addTodoAction,editTodoAction,deleteTodoAction}