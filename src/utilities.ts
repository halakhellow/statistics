export let dateStringToDate = (dateString: string): Date => {
  let dateParts = dateString.split("/").map((value: string): number => +value);
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
