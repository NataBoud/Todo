import { Task } from '../Task';
import styles from './tasks.module.css'; 

export function Tasks({ tasksProp, onCompleteProp, onDeleteProp }) {

    const tasksQuantity = tasksProp.length;

    const completedTasks = tasksProp.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <div className={styles.header}>
                <div>
                    <p>Tâches crées</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Accomplies</p>
                    <span>{completedTasks} sur {tasksQuantity}</span>
                </div>
            </div>

            <div className={styles.list}>
                {tasksProp.map(task => (
                    <Task 
                        key={task.id} 
                        taskProp={task}
                        onCompletePropToTask={onCompleteProp}
                        onDeletePropToTask={onDeleteProp}

                    />
                ))}
            </div>
        </section>
    )
}