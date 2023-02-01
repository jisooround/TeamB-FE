import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const likeItemState = atom({
  key: 'likeItemState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const insertLikeItemState = selector({
  key: 'insertLikeItemState',
  get: ({ get }) => {
    const test = get(likeItemState);
    return test;
  },
});
