import "./widget.scss"
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhotoCameraBackOutlinedIcon from '@mui/icons-material/PhotoCameraBackOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
const Widget = ({type}) => {
    let data;
    switch(type){
        case"user":
        data={
            title:"Driglam Namzha Admin Page",
            isProduct:false,
            // link:"See all users",
            icon:<BookOutlinedIcon
            className="icon"
            style={{
                color:"crimson",
                backgroundColor:"rgba(218,165,32,0.2)",
            }}
            />
        };
        break;

        case"image":
        data={
            title:"IMAGE",
            isProduct:true,
            // link:"See all image",
            icon:<PhotoCameraBackOutlinedIcon 
                className="icon"
                    style={{
                        backgroundColor:"rgba(218,165,32,0.2)",
                        color:"green",
                    }}
                    />
                };
        break;

        case"video":
        data={
            title:"VIDEO",
            isProduct:true,
            // link:"See all video",
            icon:<VideoLibraryOutlinedIcon 
                className="icon"
                style={{
                    backgroundColor:"rgba(218,165,32,0.2)",
                    color:"goldenrod",

                }} />
        };
        break;
        default:
        break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isProduct}
            </span>
            {/* <span className="link">{data.link}</span> */}
        </div>

        <div className="right">
            {/* <div className="percentage positive"> */}
                {/* <KeyboardArrowUpOutlinedIcon/> */}
                {/* 20% */}
            {/* </div> */}
            {data.icon}
        </div>
    </div>
  )
}

export default Widget