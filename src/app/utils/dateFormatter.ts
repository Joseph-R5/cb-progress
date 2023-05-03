export const getDaySuffix =(day: number) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
}

export const convertLastDate = (lastDate: string) => {

  const date = new Date(lastDate);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const day = parseInt(lastDate.slice(8, 10));
  const suffix = getDaySuffix(day);
  
  return `${day}${suffix} ${month} ${year}`;
}