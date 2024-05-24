import { useDispatch, useSelector } from 'react-redux';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { toggleTaskCompleted, deleteTask, selectTaskById } from '../../features/tasks/taskSlice';

export function Task({ taskId }) {
    
    const dispatch = useDispatch();
    const task = useSelector((state) => selectTaskById(state, taskId));

    if (!task) {
        return null; 
    }

    return (
        <div className={styles.task}>
            <button
                type='button'
                className={styles.checkContainer}
                onClick={() => dispatch(toggleTaskCompleted(task.id))}
            >
                {task.isCompleted ?
                    <BsFillCheckCircleFill /> :
                    <div className={styles.cercle} />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.description}
            </p>

            <button
                type='button'
                className={styles.deleteButton}
                onClick={() => dispatch(deleteTask(task.id))}
            >
                <TbTrash size={20} />
            </button>
        </div>
    );
}
