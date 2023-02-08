import { instance } from './axios';

// export const getDetails = async (id, setState, setError) => {
//   try {
//     const res = await instance.get(`/commentThreads?part=snippet&videoId=${id}`);

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

export const getKeyword = async (page, keyword) => {
  const sending = {
    pageno: page,
    keyword: keyword
  };
  return instance.get(`tourlist/keyword`, { params: { ...sending } });
};

export const getDetails = async (detailId) => {
  const sending = {
    contentid: detailId,
  };
  return instance.get(`tourlist/detail`, { params: { ...sending } });
};
