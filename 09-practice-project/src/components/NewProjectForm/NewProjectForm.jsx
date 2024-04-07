import "./NewProjectForm.css";
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const NewProjectForm = forwardRef(function NewProjectForm({ onSaveForm }, ref) {
	const formRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			toggle() {
				if (formRef.current.open) {
					formRef.current.close();
				} else {
					formRef.current.show();
				}
			}
		};
	});

	const projectTitleRef = useRef();
	const projectDescriptionRef = useRef();
	const projectDueDateRef = useRef();

	function constructProject() {
		return {
			title: projectTitleRef.current.value,
			description: projectDescriptionRef.current.value,
			dueDate: projectDueDateRef.current.value,
			tasks: []
		};
	}

	return (
		<>
			{createPortal(
				<dialog className="new-project-form" ref={formRef}>
					<div className="new-project-form__buttons-wrapper">
						<form method="dialog">
							<button>Cancel</button>
						</form>
						<button
							className="new-project-form__save"
							onClick={() => onSaveForm(constructProject())}
						>
							Save
						</button>
					</div>

					<form className="new-project-form__form">
						<label className="new-project-form__label">
							TITLE
							<input type="text" id="title" ref={projectTitleRef} />
						</label>

						<label className="new-project-form__label">
							DESCRIPTION
							<textarea
								className="new-project-form__description"
								id="description"
								rows="3"
								ref={projectDescriptionRef}
							></textarea>
						</label>

						<label className="new-project-form__label">
							DUE DATE
							<input type="date" id="date" ref={projectDueDateRef} />
						</label>
					</form>
				</dialog>,
				document.getElementById("main-view")
			)}
		</>
	);
});

export default NewProjectForm;