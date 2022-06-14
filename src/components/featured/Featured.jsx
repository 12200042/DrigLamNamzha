import "./featured.scss"
import Gold from '../../image/driglam.jpg';
import Silver from '../../image/sitting.png';

const Featured = () => {
  return (
    <div className='featured'>Driglam Namzha Image
        <div className="item">
            <img
            src={Gold}
            alt=" "
            className="avatar"/>
        </div>
        <div className="item">
            <img
            src={Silver}
            alt=" "
            className="avatar"/>
        </div>
    </div>
        
   
  )
}

export default Featured