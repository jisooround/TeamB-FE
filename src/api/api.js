import { instance } from './axios';
import { AxiosError } from 'axios';
import { detailDummydata } from '@/data/dummydata';

export const getDetails = async (id, setState, setError) => {
  try {
    const res = await instance.get(`tourlist/detail?contentid=${id}`);
    if (res.status === 200) {
      setState(res);
      console.log(res);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      setError(error.message);
      setState(detailDummydata);
    }
  }
};
//     if (res.status === 200) {
//       setState(res);
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.log(error.message);
//       setError(error.message);
//     }
//   }
// };

// export const getDetails = async (detailId) => {
//   const sending = {
//     contentid: detailId,
//   };
//   return instance.get(`tourlist/detail`, { params: { ...sending } });
// };
