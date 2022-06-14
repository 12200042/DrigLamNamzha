export const userColumns = [
    {field: "id", headerName: "ID", width: 200},{
        field :"image",
        headerName:"Image",
        width:300,
        renderCell:(params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field:"name",
        headerName:"Name"
    },
    {
        field:"description",
        headerName:"Description",
        width:400,
    },
    // {
    //     field:"age",
    //     headerName:"Age",
    //     width:250,
    // },

    // {
    //     field:"status",
    //     headerName:"Status",
    //     width:200,
    //     renderCell:(params)=>{
    //         return (
    //             <div className={`cellWithStatus ${params.row.status}`}>
    //                 {params.row.status}</div>
    //         );
    //     },
    // },

    
    
];

export const userRows = [
    {
        id:1,
        username:"Deki Yangden",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"active",
        email:"12200042.gcit@rub.edu.bt",
        age:21,
    },
    {
        id:2,
        username:"Sujata Rai",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"passive",
        email:"12200086.gcit@rub.edu.bt",
        age:21,
    },

    {
        id:3,
        username:"Sonam Wangchuk",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"pending",
        email:"12200083.gcit@rub.edu.bt",
        age:21,
    },
    {
        id:4,
        username:"Hang subba",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"active",
        email:"12200096.gcit@rub.edu.bt",
        age:21,
    },
]