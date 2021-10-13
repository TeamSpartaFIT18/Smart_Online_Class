import './Home.css'
//import { userData } from '../../dummyData'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import Chart from '../../Chart/Chart'
import WidgetSm from '../../WidgetSm/WidgetSm'
import WidgetLg from '../../WidgetLg/WidgetLg'
import { userData } from '../../../dummyData'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
