import React from 'react'
import Header from '../components/Header'
const TaskHeader = {
  title: 'Tasks',
  isAdd: true,
  isSearch: true,
  isSelectUser: false,
  isSwitch:false,

}
const Tasks = () => {
  return (
    <div> 

      <Header Header={TaskHeader} />
    </div>
  )
}

export default Tasks
