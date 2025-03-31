import {useActionState} from "react";

function opinionAction(currentState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    if (userName === "" || title === "" || body === "") {
        return {errors: "Please fill in all fields."}
    }

    return {errors: null, userName, title, body};
}

export function NewOpinion() {
    const [opinionFormState, opinionFormAction] = useActionState(opinionAction, {errors: null});

    return (
        <div id="new-opinion">
            <h2>Share your opinion!</h2>
            <form action={opinionFormAction}>
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="userName">Your Name</label>
                        <input type="text" id="userName" name="userName" defaultValue={opinionFormState?.userName}/>
                    </p>

                    <p className="control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" defaultValue={opinionFormState?.title}/>
                    </p>
                </div>
                <p className="control">
                    <label htmlFor="body">Your Opinion</label>
                    <textarea id="body" name="body" rows={5} defaultValue={opinionFormState?.body}></textarea>
                </p>

                <p className="actions">
                    <button type="submit">Submit</button>
                </p>
            </form>

            {opinionFormState?.errors}
        </div>
    );
}
