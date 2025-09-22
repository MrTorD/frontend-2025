import type { Slide } from "./Types.tsx";
import styles from './css/WorkingSpace.module.css'

type SlideListProps = {
    slides: Slide[]
}

function SlideList(props: SlideListProps) {
    const slides: Array<Slide>  = props.slides;
    const slideList = slides.map(slide => 
        <div className={styles.slidesList} key={slide.id}>
            <button onClick={() => console.log(`Номер слайда: ${slides.indexOf(slide) + 1}, id слайда: ${slide.id}`)}>
                { slide.background.type === 'picture' &&
                    <img className={styles.backgroundMinImg} src={slide.background.src}></img>
                }
                { slide.background.type === 'color' && 
                    <div className={styles.backgroundMinColor} style={{backgroundColor: slide.background.src}}></div>
                }
            </button>
            { slides.indexOf(slide) + 1 + " слайд"}
        </div>
    )
    return (
        <div>
            { slideList }
        </div>
    )
}

export default SlideList