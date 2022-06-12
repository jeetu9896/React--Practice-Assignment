const List = (props)=>{
    console.log(props);
    const {listitem} = props;
    // console.log({title ,status});
    return<>
    {
        listitem.status?<h2 style={{color :"green"}} key= {listitem.id} > {listitem.title}</h2>:<h2 style={{color:"red"}}>{listitem.title}</h2>
    }
    </>
}
export default List;