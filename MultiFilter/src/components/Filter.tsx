import { Sluggable,filterprops } from "../types"

const Filter =<T extends Sluggable>({Categories,selectedFilters,setSelectedFilters}:filterprops<T>)=>{
const handleFilter =(name:string)=>{
    if(selectedFilters.includes(name)){
        let updatedselectedfilter = selectedFilters.filter((filter)=>filter!==name)
        setSelectedFilters(updatedselectedfilter);
    }
    else{
        let updatedselectedfilter =[...selectedFilters,name];
        setSelectedFilters(updatedselectedfilter);
    }
}
 return (
    <div className="filter">
    {Categories.map((category)=>{
        return <button className={`${selectedFilters.includes(category.name)?"active":"btn"}`} onClick={()=>handleFilter(category.name)}  key={category?.slug}>{category?.name}</button>
    })}
    </div>
 )
}
export default Filter;