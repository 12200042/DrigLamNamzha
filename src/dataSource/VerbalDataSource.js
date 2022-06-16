export const userColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field:"name",
      headerName:"Name",
      width:300
    },
    {
      field:"type",
      headerName:"type",
      width:200,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400
    },
  ];