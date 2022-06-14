export const userColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "image",
      headerName: "Image",
      width: 220,
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
      width:260,
    },
    {
      field: "description",
      headerName: "Description",
      width: 260,
    },
  ];