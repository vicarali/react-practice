import { useReducer, type ReactElement } from "react";
import type {
	AddedContactAction,
	Contact,
	DeletedContactAction,
	EditedContactAction
} from "../types/types";
import { ContactsContext, ContactsDispatchContext } from "./ContactsContext";
import { getNewContactId } from "./contactsUtils";

export function ContactsContextProvider({
	children
}: {
	children: ReactElement;
}): ReactElement {
	const [contacts, dispatch] = useReducer(contactsReducer, []);

	return (
		<ContactsContext value={contacts}>
			<ContactsDispatchContext value={dispatch}>
				{children}
			</ContactsDispatchContext>
		</ContactsContext>
	);
}

function contactsReducer(
	contacts: Contact[],
	action: AddedContactAction | DeletedContactAction | EditedContactAction
) {
	switch (action.type) {
		case "added": {
			action.contact.id = getNewContactId(contacts);
			return [...contacts, action.contact];
		}
		case "deleted": {
			const newContacts = [...contacts];
			const contactToDelete = newContacts.indexOf(action.contact);
			newContacts.splice(contactToDelete, 1);
			return newContacts;
		}
		case "edited": {
			const newContacts = [...contacts];
			const contactToEdit = newContacts
				.map((contact) => contact.id)
				.indexOf(action.contact.id);
			newContacts.splice(contactToEdit, 1, action.contact);
			return newContacts;
		}
	}
}
