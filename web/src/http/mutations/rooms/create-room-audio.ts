import { useMutation } from "@tanstack/react-query";

import type { CreateRoomAudioRequest } from "@/http/types/create-room-audio";

export function useCreateRoomAudioMutation() {
  return useMutation({
    mutationFn: async ({ roomId, formData }: CreateRoomAudioRequest) => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/rooms/${roomId}/audio`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      return data;
    },
    // onSuccess: (_, { roomId }) => {
    //   queryClient.invalidateQueries({ queryKey: ["get-room-questions", roomId] });
    // },
  });
}
