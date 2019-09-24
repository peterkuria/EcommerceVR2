import { PICK_ROOM } from '../actions/types';

const startingRoom = {
  name: 'House For Sale',
  info: `
    * 4 bedroom
    * 3 bath
    * Priced at KShs. 10,000,000
    * Within gated community`,
  adjacentRooms: ['living_room']
}

export const roomReducer = (state = startingRoom, action={}) => {
  switch (action.type) {
    case PICK_ROOM:
      return { ...state,
        name: action.payload.name,
        info: action.payload.info,
        adjacentRooms: action.payload.adjacentRooms  }
    default:
      return state
  }
}
