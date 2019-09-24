import { PICK_ROOM} from './types'
import data from '../mockData/house';

export const pickRoom = (room) => ({
  type: PICK_ROOM,
  payload: data[room]
})
