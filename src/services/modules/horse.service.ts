import { axiosRequest } from '../axiosRequest'

export const getHorseList = async () => {
  return await axiosRequest({
    url: '/horse-list.json',
    method: 'get',
    local: true,
    data: true,
  })
}
