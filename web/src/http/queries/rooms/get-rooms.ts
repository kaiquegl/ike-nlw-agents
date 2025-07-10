import { useQuery } from "@tanstack/react-query";

import { kyApi } from "@/http/api";
import type { GetRoomsResponse } from "@/http/types/get-rooms";

export function useGetRoomsQuery() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => await kyApi.get("rooms").json<GetRoomsResponse>(),
  });
}
