export interface lights{
    id:number,
    color:string,
    time:number,
    next:string
}
export const data:lights[] =[
    {id:1,
     color:'red',
     time:2000,
     next:'yellow'
    },
    {
        id:2,
        color:'yellow',
        time:500,
        next:'green'
    },
    {
        id:3,
        color:'green',
        time:1000,
        next:'red'
    }
]