import { useState } from 'react';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from "react-icons/ai";
import todoLogo from '../../assets/todoLogo.svg';

export function Header({ onAddTask }) {
    const [description, setDescription] = useState("");

    function handleSubmitTask(event) {
        event.preventDefault();

        onAddTask(description);
        setDescription("");
    }

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }

    return (
        <nav className={styles.header}>
            <img src={todoLogo} alt="ToDo Logo" />

            <form onSubmit={handleSubmitTask} className={styles.newTaskForm}>
                <input
                    placeholder='Ajouter une nouvelle tâche...'
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                />
                <button type='submit' disabled={description.trim() === ""}>
                    Créer
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </nav>
    );
}
