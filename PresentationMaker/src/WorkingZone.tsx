import type { Slide } from "./Types.js"
import styles from './css/WorkingSpace.module.css'

type WorkingZoneProps = {
    slide: Slide | undefined,
    width: number,
    height: number
}

function WorkingZone(props: WorkingZoneProps) {
    const slide = props.slide
    const width = props.width
    const height = props.height

    return (
        <>
        { slide?.background.type === 'picture' && 
            <img className={styles.backgroundMainImg} src={slide.background.src} width={width} height={height}></img>
        }
        { slide?.background.type === 'color' && 
            <div className={styles.backgroundMainColor} style={{backgroundColor: slide.background.src, width, height}} ></div>
        }
        </>
    )
}

export default WorkingZone