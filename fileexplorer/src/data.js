const data ={
    name:'src',
    isFolder:true,
    items:[
        {
            name:'assets',
            isFolder:true,
            items:[
                {
                    name : 'public.png',
                    isFolder:false
                },
                {
                    name :'test.html',
                    isFolder:false
                }
            ]
        },
        {
            name:'components',
            isFolder:true,
            items:[
                {
                    name:'file.js',
                    isFolder:false
                },
                {
                    name :'component',
                    isFolder:true,
                    items:[
                        {
                            name :'test.html',
                            isFolder:false
                        }
                    ]
                }
            ]
        }
    ],
    
}
export default data;