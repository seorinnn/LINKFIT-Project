export interface Profile {
  gender?: string;
}

export const getDisplayGender = (profile: Profile): string => {
  if (!profile.gender) return '성별 정보 없음';

  switch (profile.gender) {
    case 'MALE':
      return '남';
    case 'FEMALE':
      return '여';
    default:
      return '성별 정보 없음';
  }
};
