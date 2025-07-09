import { useQuery } from "@tanstack/react-query";

import { kyApi } from "@/core/api";

type GetRoomsResponse = {
  id: string;
  name: string;
}[];

export function getRoomsQuery() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => await kyApi.get("rooms").json<GetRoomsResponse>(),
  });
}
