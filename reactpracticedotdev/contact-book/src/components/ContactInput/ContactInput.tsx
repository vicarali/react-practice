import { use, type FormEvent, type ReactElement } from "react";
import styles from "./styles.module.css";
import { ContactsDispatchContext } from "../../contexts/ContactsContext";

export function ContactInput(): ReactElement {
	const contactsDispatch = use(ContactsDispatchContext);

	function handleAddContact(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;

		const formData = new FormData(form);

		contactsDispatch!({
			type: "added",
			contact: {
				name: formData.get("name")!.toString(),
				city: formData.get("city")!.toString(),
				id: 0
			}
		});

		form.reset();
	}

	return (
		<form className={styles.form} onSubmit={handleAddContact}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				className={styles.formInput}
			></input>
			<label htmlFor="name">City:</label>
			<input
				type="text"
				id="city"
				name="city"
				className={styles.formInput}
			></input>
			<button>Add contact</button>
		</form>
	);
}
