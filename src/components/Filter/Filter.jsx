

export function Filter({onFilter}){
    return (
        <>
        <p>Find contacts by names</p>
        <input type="text" onChange={onFilter} />
        </>        
    )
}