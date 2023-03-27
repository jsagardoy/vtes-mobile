export const getFormatedList = (data: string[]) =>
  data
    .map((elem, index) => {
      if (index === data.length - 1 && data.length > 1) {
        return ' and '.concat(elem);
      }
      if (index === 0) {
        return elem;
      }

      return ', '.concat(elem);
    })
    .join('');
