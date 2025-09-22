import styles from "./css/ToolBar.module.css"
import type { Presentation } from "./Types";

type ToolBarProps = {
    presentation: Presentation
}

function ToolBar(props: ToolBarProps) {
    const p = props.presentation

    return (
        <div className={styles.toolbar}>
        <button onClick={() => console.log('Вы нажали кнопку "Редактировать"')}>
            Редактировать
        </button>

        <button onClick={() => console.log('Вы нажали кнопку "Копировать"')}>
            Копировать
        </button>

        <button onClick={() => console.log('Вы нажали кнопку "Вставить"')}>
            Вставить
        </button>
        <form className={styles.form}>
            <label className={styles.label}>
                Изменить название презентации
                <input defaultValue={p.name} type='text' name='PresentationName'></input>
                <button type="submit">Подтвердить</button>
            </label>
        </form>

        </div>
    )
}

export default ToolBar