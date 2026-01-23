import { createContext, type ActionDispatch } from "react";
import type {
	AddedContactAction,
	Contact,
	DeletedContactAction,
	EditedContactAction
} from "../types/types";

export const ContactsContext = createContext<Contact[]>([]);
export const ContactsDispatchContext = createContext<
	| ActionDispatch<
			[AddedContactAction | DeletedContactAction | EditedContactAction]
	  >
	| undefined
>(undefined);
