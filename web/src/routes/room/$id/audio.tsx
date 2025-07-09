import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/room/$id/audio")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello aaa "/room/$id/audio"!</div>;
}
