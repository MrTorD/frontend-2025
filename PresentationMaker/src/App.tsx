import './css/App.css'
import SlideList from './SlideList'
import ToolBar from './ToolBar'
import { createPresentation, addSlide } from './Functions'
import WorkingZone from './WorkingZone'
import styles from './css/WorkingSpace.module.css'

function App() {
  let p = createPresentation('Test');
  p = addSlide(p, {src: '#73ff00ff', type: 'color'}); 
  p = addSlide(p, {src: 'https://static.tildacdn.com/tild6137-3037-4837-b437-616464646636/10-min.jpg', type: 'picture'});

  return (
    <>
    <ToolBar presentation={p}/>
    <div className={styles.workingSpace}>
      <SlideList slides={[p.slides[0], p.slides[1]]}/>
      <WorkingZone slide={p.slides[0]} width={700} height={450}/>
    </div>

    </>
  )
}

export default App
