import type { Contact } from "../types/types";

export function getNewContactId(contacts: Contact[]) {
	if (contacts.length === 0) return 1;
	return contacts[contacts.length - 1].id + 1;
}
