import { instance } from './axios';
import { AxiosError } from 'axios';
import { detailDummydata } from '@/data/dummydata';

// export const getDetails = async (tourId, setState, setError) => {
//   try {
//     const res = await instance.get(`tourlist/detail?contentid=${tourId}`);
//     if (res.status === 200) {
//       setState(res);
//       console.log(res);
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.log(error.message);
//       setError(error.message);
//       setState(detailDummydata);
//     }
//   }
// };

export const getDetails = async (detailId) => {
  const sending = {
    contentid: detailId,
  };
  return instance.get(`tourlist/detail`, { params: { ...sending } });
};
