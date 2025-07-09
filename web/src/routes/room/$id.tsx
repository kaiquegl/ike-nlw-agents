import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/room/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <div>Hello "/room/$id"! {id}</div>;
}
