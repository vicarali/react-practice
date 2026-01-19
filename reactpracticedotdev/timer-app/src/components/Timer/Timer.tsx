import { useRef, useState, type ReactElement } from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export type TimerInterval = {
	interval: number;
	enabled: boolean;
};

export function Timer(): ReactElement {
	const [timerSeconds, setTimerSeconds] = useState(300);
	const timerInterval = useRef<TimerInterval>({
		interval: 0,
		enabled: false
	});

	function startTimerInterval() {
		if (timerInterval.current.enabled) return;

		timerInterval.current.interval = setInterval(() => {
			setTimerSeconds((previousSeconds) => previousSeconds - 1);
		}, 1000);
		timerInterval.current.enabled = true;
	}

	function stopTimerInterval() {
		if (!timerInterval.current.enabled) return;

		clearInterval(timerInterval.current.interval);
		timerInterval.current.enabled = false;
	}

	return (
		<div>
			<span>
				{Math.trunc(timerSeconds / 60)}:
				{String(timerSeconds % 60).padStart(2, "0")}
			</span>
			<ActionButtons
				setTimerSeconds={setTimerSeconds}
				startTimerInterval={startTimerInterval}
				stopTimerInterval={stopTimerInterval}
			/>
		</div>
	);
}
