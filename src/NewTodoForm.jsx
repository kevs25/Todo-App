import { useState } from "react"

export function NewTodoForm(Props) {

    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        
        Props.onSubmit(newItem)
        setNewItem("")
    
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="new-item-form">
            <label htmlFor="item">New Item</label>
            <input value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" id="item" />
        </div>
        <button className="btn">Add</button>
    </form>
    )
}