export  interface charts{
    id:string,
    name:string,
    ticketCount:number,
    colour:string
}
export interface barchartprops{
    charts:charts[],
    toggle:boolean
}
export interface singlechartporps{
    chart:charts,
    toggle:boolean
}