interface GetRoomMessageRequest {
  roomId: string
}

export async function getRoomMessage({ roomId }: GetRoomMessageRequest){
  // ${import.meta.env.VITA_APP_BASE_URL}/rooms
  const response = await fetch(`http://localhost:8080/api/rooms/${roomId}/messages`)

  const data: Array<{
    id: string
    room_id: string
    message: string
    reaction_count: number
    answered: boolean
  }> = await response.json()

  return { roomId: data.id }
}