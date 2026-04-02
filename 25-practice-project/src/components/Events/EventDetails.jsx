import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../utils/http.js";

export default function EventDetails() {
	const navigate = useNavigate();
	const eventId = useParams().id;
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["events", { id: eventId }],
		queryFn: ({ signal }) => fetchEvent({ signal, id: eventId })
	});
	const { mutate } = useMutation({
		mutationFn: () => deleteEvent({ id: eventId }),
		onSuccess: () => {
			queryClient.invalidateQueries();
			navigate("/events");
		}
	});

	return (
		<>
			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>

			{isLoading && <LoadingIndicator />}
			{isError && (
				<ErrorBlock title="An error occurred" message={error.message} />
			)}
			{data && (
				<article id="event-details">
					<header>
						<h1>{data.title}</h1>
						<nav>
							<button onClick={mutate}>Delete</button>
							<Link to="edit">Edit</Link>
						</nav>
					</header>
					<div id="event-details-content">
						<img src={`http://localhost:3000/${data.image}`} alt="" />
						<div id="event-details-info">
							<div>
								<p id="event-details-location">{data.location}</p>
								<time dateTime={`${data.date}T$${data.time}`}>
									{data.date} @ {data.time}
								</time>
							</div>
							<p id="event-details-description">{data.description}</p>
						</div>
					</div>
				</article>
			)}
		</>
	);
}
