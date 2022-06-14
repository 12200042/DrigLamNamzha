import "./chart.scss"
import Gold from '../../image/driglam02.jpg';
import silver from '../../image/rachu.jpg';
const Chart = () => {
  return (
    <div className="chart">Driglam Namzha Video
      <div className="item">
        <img
          src={Gold}
          alt=" "
          className="avatar" />
      </div>
      <div className="item">
        <img
          src={silver}
          alt=" "
          className="avatar" />
      </div>
    </div>
  )
}

export default Chart