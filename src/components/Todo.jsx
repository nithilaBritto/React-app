import React from 'react'
import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';
function Todo() {
    const [task,setTask]=React.useState()
    const [data,setData]=React.useState([])
    const [count,setCount]=React.useState(1)
    const [searchQuery,setSearchQuery]=React.useState('')
    const [filteredData,setFilteredData]=React.useState([])
    
    
    const onSearch=(e)=>{
      setSearchQuery(e.toLowerCase())
      //Set Error message
    }
    
    React.useEffect(()=>{
      const filteredData=(data.filter(item=>searchQuery?item.task.toLowerCase().includes(searchQuery):true))
      setFilteredData(filteredData)
    },[searchQuery,data])

    const handleEdit=(id)=>{
      const update=data.map(item=>item.id===id?{...item,isediting:!item.isediting}:item)
      setData(update)
    }
    
    const handleDelete=(id)=>{
        //On clicking delete task is removed
        const newData=data.filter(ele=>ele.id!==id)
        setData(newData)
        
    }

    const taskComplete=(id)=>{
      //Denoting task is completed
      setData(data.map(item=>item.id===id?{...item,completed:!item.completed}:item))
  }

  const onAdd=(task)=>{
    setCount(prev=>prev+1)
    //Emptying input tab
   task&&setData(prev=>(
    [...prev,{id:count,task:task,completed:false,isediting:false}]))
  }

  const onModify=(id,value)=>{
    setData(data.map(item=>item.id===id?{...item,task:value,isediting:!item.isediting}:item))
  }

  return (
    <>
    <div className="container">
      
      <Header />
      <AddTask onAdd={onAdd} setTask={setTask} data={data}/>
      <Tasks data={filteredData} onSearch={onSearch} onEdit={handleEdit} onDelete={handleDelete} onModify={onModify} onComplete={taskComplete}/>
    </div>
    </>
  )
}

export default Todo