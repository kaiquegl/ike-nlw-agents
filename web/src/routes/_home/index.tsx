import { createFileRoute } from "@tanstack/react-router";

import { CreateRoomForm } from "@/components/pages/home/form";
import { RoomList } from "@/components/pages/home/list";

export const Route = createFileRoute("/_home/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-dvh px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />
          <RoomList />
        </div>
      </div>
    </div>
  );
}
