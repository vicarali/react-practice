export type Contact = {
	name: string;
	city: string;
	id: number;
};

export type AddedContactAction = {
	type: "added";
	contact: Contact;
};

export type DeletedContactAction = {
	type: "deleted";
	contact: Contact;
};

export type EditedContactAction = {
	type: "edited";
	contact: Contact;
};
