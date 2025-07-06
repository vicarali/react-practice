import { useDroppable } from "@dnd-kit/core";
import styles from "./Trash.module.css";

export function Trash() {
	const { setNodeRef: setDroppableRef } = useDroppable({
		id: "trash"
	});

	return <div ref={setDroppableRef} className={styles.trash}></div>;
}
