import { useMutation, useQueryClient } from "@tanstack/react-query";

import { kyApi } from "@/core/http/api";
import type { CreateRoomRequest, CreateRoomResponse } from "@/core/http/types/create-room";

export function useCreateRoomMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      return await kyApi.post("rooms", { body: JSON.stringify(data) }).json<CreateRoomResponse>();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-rooms"] });
    },
  });
}
