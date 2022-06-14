export const usersColumn = [
    {field: "id", headerName: "ID", width: 200},{
        field :"image",
        headerName:"Image",
        width:300,
        renderCell:(params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.user}
                </div>
            );
        },
    },
    {
        field:"name",
        headerName:"Name",
        width:400,
    },
    {
        field:"description",
        headerName:"Description",
        width:400,
    },
   

    
    
];

