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
            {/* <h1 className={styles.gradient}>todo app</h1>
            <h1 className={styles.shadow}>todo app</h1> */}
            <img src={todoLogo} />

            <form onSubmit={handleSubmitTask} className={styles.newTaskForm}>

                <input 
                    placeholder='Ajouter une nouvelle tâche...' 
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    />

                <button type='submit'>
                    Créer
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </nav>
    )
}