import"../app/page.css"
interface Props {
    setFilter: (filter: string) => void;
}
function Todofilter({setFilter}:Props) {
    return (
        <div className="filter">
            <button className="btn btn-primary" onClick={()=>setFilter('all')}>全部</button>
            <button className="btn btn-primary" onClick={()=>setFilter('active')}>代办</button>
            <button className="btn btn-primary" onClick={()=>setFilter('completed')}>已完成</button>
        </div>
    )
}
export default Todofilter;