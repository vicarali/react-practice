import styles from "./Task.module.css";
import { useDraggable } from "@dnd-kit/core";

export function Task({ value, status }) {
	const {
		attributes: draggableAttributes,
		listeners: draggableListeners,
		setNodeRef: setDraggableRef,
		transform: draggableTransform
	} = useDraggable({
		id: value,
		data: {
			status
		}
	});
	const draggableStyle = draggableTransform
		? {
				transform: `translate3d(${draggableTransform.x}px, ${draggableTransform.y}px, 0)`
		  }
		: undefined;

	return (
		<li
			className={styles.task}
			style={draggableStyle}
			ref={setDraggableRef}
			{...draggableListeners}
			{...draggableAttributes}
		>
			{value}
		</li>
	);
}
