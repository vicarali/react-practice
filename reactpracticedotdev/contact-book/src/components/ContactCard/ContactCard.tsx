import {
	use,
	type Dispatch,
	type FormEvent,
	type ReactElement,
	type SetStateAction
} from "react";
import type { Contact } from "../../types/types";
import styles from "./styles.module.css";
import { ContactsDispatchContext } from "../../contexts/ContactsContext";

export function ContactCard({
	contact,
	editingContact,
	onEditContact
}: {
	contact: Contact;
	editingContact: number | undefined;
	onEditContact: Dispatch<SetStateAction<number | undefined>>;
}): ReactElement {
	if (editingContact === contact.id)
		return <ContactEditForm contact={contact} onEditContact={onEditContact} />;
	else return <ContactInfo contact={contact} onEditContact={onEditContact} />;
}

function ContactEditForm({
	contact,
	onEditContact
}: {
	contact: Contact;
	onEditContact: Dispatch<SetStateAction<number | undefined>>;
}): ReactElement {
	const contactsDispatch = use(ContactsDispatchContext);

	function handleDelete() {
		contactsDispatch!({
			type: "deleted",
			contact: contact
		});
		onEditContact(undefined);
	}

	function handleCancel() {
		onEditContact(undefined);
	}

	function handleEdit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		contactsDispatch!({
			type: "edited",
			contact: {
				id: contact.id,
				name: formData.get("name")!.toString(),
				city: formData.get("city")!.toString()
			}
		});
		onEditContact(undefined);
	}

	return (
		<form className={styles.editForm} onSubmit={handleEdit}>
			<label>
				Name
				<input
					type="text"
					id="name"
					name="name"
					defaultValue={contact.name}
					className={styles.editFormInput}
				/>
			</label>
			<label>
				City
				<input
					type="text"
					id="city"
					name="city"
					defaultValue={contact.city}
					className={styles.editFormInput}
				/>
			</label>

			<div className={styles.buttonsGroup}>
				<button type="button" onClick={handleDelete}>
					Delete
				</button>
				<div>
					<button type="button" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit" className={styles.saveButton}>
						Save
					</button>
				</div>
			</div>
		</form>
	);
}

function ContactInfo({
	contact,
	onEditContact
}: {
	contact: Contact;
	onEditContact: Dispatch<SetStateAction<number | undefined>>;
}): ReactElement {
	function handleEdit() {
		onEditContact(contact.id);
	}

	return (
		<>
			<h2>{contact.name}</h2>
			<p>{contact.city}</p>
			<button onClick={handleEdit}>Edit</button>
		</>
	);
}
