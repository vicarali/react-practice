import type { ReactElement, Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";

export function ActionButtons({
	setTimerSeconds,
	startTimerInterval,
	stopTimerInterval
}: {
	setTimerSeconds: Dispatch<SetStateAction<number>>;
	startTimerInterval: () => void;
	stopTimerInterval: () => void;
}): ReactElement {
	function handleReset() {
		setTimerSeconds(300);
	}

	return (
		<div className={styles.container}>
			<button onClick={startTimerInterval}>START</button>
			<button onClick={stopTimerInterval}>STOP</button>
			<button onClick={handleReset}>RESET</button>
		</div>
	);
}
