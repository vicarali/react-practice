import styles from "./CartModal.module.css";

export default function CartModal({ref, setIsOpen}) {
    return (
        <dialog className={styles.modal} ref={ref}>
            <div className={styles.modalActions}>
                <button className={`text-button ${styles.textButton}`} onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </dialog>
    )
}

