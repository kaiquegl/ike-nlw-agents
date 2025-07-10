type CreateRoomQuestionRequest = {
  roomId: string;
  question: string;
};

type CreateRoomQuestionResponse = {
  questionId: string;
  answer: string | null;
};

export type { CreateRoomQuestionRequest, CreateRoomQuestionResponse };
