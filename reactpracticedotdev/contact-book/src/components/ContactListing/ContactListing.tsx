import { use, useState, type ReactElement } from "react";
import styles from "./styles.module.css";
import { ContactCard } from "../ContactCard/ContactCard";
import { ContactsContext } from "../../contexts/ContactsContext";

export function ContactListing(): ReactElement {
	const contacts = use(ContactsContext);
	const [editingContact, setEditingContact] = useState<number | undefined>();

	return (
		<ul className={styles.cardListing}>
			{contacts.map((contact) => (
				<li key={contact.id} className={styles.card}>
					<ContactCard
						contact={contact}
						editingContact={editingContact}
						onEditContact={setEditingContact}
					/>
				</li>
			))}
		</ul>
	);
}
