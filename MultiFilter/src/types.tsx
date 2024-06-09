export interface Sluggable {
    slug: string;
    name: string;
  }
  export interface products{
    id:number,
    title:string,
    category:string
  }
  export interface productsprop{
    products:products[]
  }

 export interface filterprops<T extends Sluggable>{
    Categories:T[],
    selectedFilters:string[];
    setSelectedFilters:(selectedFilters:string[])=>void
}
