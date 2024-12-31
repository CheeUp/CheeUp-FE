export const dateToKor = (date: Date): string => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export const getDDay = (date: Date): string => {
  const today = new Date();
  const diff = date.getTime() - today.getTime();
  if (diff < 0) {
    return '종료됨';
  } else if (diff < 1000 * 60 * 60 * 24) {
    return (
      '종료 ' +
      Math.floor(diff / (1000 * 60 * 60)) +
      '시간 ' +
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) +
      '분 전'
    );
  } else {
    return '종료 ' + Math.floor(diff / (1000 * 60 * 60 * 24)) + '일 전';
  }
};