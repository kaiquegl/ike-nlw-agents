import { useMutation, useQueryClient } from "@tanstack/react-query";

import { kyApi } from "@/http/api";
import type { CreateRoomQuestionRequest, CreateRoomQuestionResponse } from "@/http/types/create-room-question";
import type { GetRoomQuestionsResponse } from "@/http/types/get-room-questions";

export function useCreateRoomQuestionMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ roomId, question }: CreateRoomQuestionRequest) => {
      return await kyApi
        .post(`rooms/${roomId}/question`, { body: JSON.stringify({ question }) })
        .json<CreateRoomQuestionResponse>();
    },

    // Executa no momento que for feita a chamada p/ API
    onMutate({ question, roomId }) {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>(["get-room-questions", roomId]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        isGeneratingAnswer: true,
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-room-questions", roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess(data, { roomId }, context) {
      queryClient.setQueryData<GetRoomQuestionsResponse>(["get-room-questions", roomId], (questions) => {
        if (!questions) {
          return questions;
        }

        if (!context.newQuestion) {
          return questions;
        }

        return questions.map((question) => {
          if (question.id === context.newQuestion.id) {
            return {
              ...context.newQuestion,
              id: data.questionId,
              answer: data.answer,
              isGeneratingAnswer: false,
            };
          }

          return question;
        });
      });
    },

    onError(_, { roomId }, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(["get-room-questions", roomId], context.questions);
      }
    },
    // onSuccess: (_, { roomId }) => {
    //   queryClient.invalidateQueries({ queryKey: ["get-room-questions", roomId] });
    // },
  });
}
