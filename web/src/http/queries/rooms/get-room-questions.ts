import { useQuery } from "@tanstack/react-query";

import { kyApi } from "@/http/api";
import type { GetRoomQuestionsResponse } from "@/http/types/get-room-questions";

export function useGetRoomQuestionsQuery(roomId: string) {
  return useQuery({
    queryKey: ["get-room-questions", roomId],
    queryFn: async () => await kyApi.get(`rooms/${roomId}/questions`).json<GetRoomQuestionsResponse>(),
  });
}
