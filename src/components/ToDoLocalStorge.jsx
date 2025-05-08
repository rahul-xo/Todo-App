import React from 'react'

const ToDoLocalStorge = ({task , name}) => {

    localStorage.setItem(name,JSON.stringify(task));
    return null;

}

export default ToDoLocalStorge