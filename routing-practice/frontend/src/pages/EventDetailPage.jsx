import { useParams } from "react-router";

export default function EventDetailPage() {
  const params = useParams();

  return <h1>EventDetailPage {params.id}</h1>;
}
