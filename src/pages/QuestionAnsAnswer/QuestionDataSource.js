export const userColumns = [
    {field: "id", headerName: "ID", width: 200},{
    //     field :"image",
    //     headerName:"Image",
    //     width:300,
    //     renderCell:(params)=>{
    //         return (
    //             <div className="cellWithImg">
    //                 <img className="cellImg" src={params.row.img} alt="avatar"/>
    //                 {params.row.username}
    //             </div>
    //         );
    //     },
    },
    {
        field:"question",
        headerName:"Question",
        width:400,
    },
    {
        field:"answer",
        headerName:"Answer",
        width:700,
    },  
];