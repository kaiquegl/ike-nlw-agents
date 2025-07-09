type CreateRoomRequest = {
  name: string;
  description: string;
};

type CreateRoomResponse = {
  roomId: string;
};

export type { CreateRoomRequest, CreateRoomResponse };
