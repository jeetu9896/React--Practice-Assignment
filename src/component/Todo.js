import List from "./List"

const Todo =()=>{
    const Tododata=
        [
            { id: 1, title: "Wake up", status: true },
            { id: 2, title: "drink tea", status: false },
            { id: 3, title: "eat maggi", status: true },
            { id: 4, title: "sleep", status: false }
          ]
    
    return <div>
        <h2>TODO LIST</h2>
        {
            Tododata.map((item) =>(
                <List listitem= {item} />
            )
            
           )
        }
    </div>
    
}
export default Todo;