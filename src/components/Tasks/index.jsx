import { useSelector } from 'react-redux';
import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks() {
    const tasks = useSelector((state) => state.tasks.taskList);

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <div className={styles.header}>
                <div>
                    <p>Tâches créées</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Accomplies</p>
                    <span>{completedTasks} sur {tasksQuantity}</span>
                </div>
            </div>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Task key={task.id} taskId={task.id} />
                ))}
            </div>
        </section>
    );
}

