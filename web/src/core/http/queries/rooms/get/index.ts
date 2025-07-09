import { useQuery } from "@tanstack/react-query";

import { kyApi } from "@/core/http/api";
import type { GetRoomsResponse } from "@/core/http/types/get-rooms";

export function useGetRoomsQuery() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => await kyApi.get("rooms").json<GetRoomsResponse>(),
  });
}
