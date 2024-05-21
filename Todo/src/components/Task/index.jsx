import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

export function Task({ taskProp, onCompletePropToTask, onDeletePropToTask }) {
    return (
        <div className={styles.task}>

            <button
                type='button'
                className={styles.checkContainer}
                onClick={() => onCompletePropToTask(taskProp.id)}
            >
                {taskProp.isCompleted ?
                 <BsFillCheckCircleFill /> : 
                 <div className={styles.cercle} />}
            </button>

            <p className={taskProp.isCompleted ? styles.textCompleted : ""}>
                {taskProp.description}
            </p>

            <button 
                type='button' 
                className={styles.deleteButton}
                onClick={() => onDeletePropToTask(taskProp.id)}
            >
                <TbTrash size={20} />
            </button>
        </div>
    )
}