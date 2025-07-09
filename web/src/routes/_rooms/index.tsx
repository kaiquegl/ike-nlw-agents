import { createFileRoute, Link } from "@tanstack/react-router";

import { getRoomsQuery } from "@/core/services/queries/rooms/get";

export const Route = createFileRoute("/_rooms/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = getRoomsQuery();

  return (
    <div>
      <div>Create Room</div>

      <div className="flex flex-col gap-2">
        {isLoading
          ? "Carregando..."
          : data?.map((room) => (
              <Link key={room.id} params={{ id: room.id }} to="/room/$id">
                {room.name}
              </Link>
            ))}
      </div>
    </div>
  );
}
