export const formatAddressName = (address) => {
  if (!address) return "";
  return `${address}`
    .toLowerCase()
    .replace("kota ", "")
    .replace("kabupaten ", "")
    .replace(" ", "-");
};

export const getTightDateTime = () => {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hour = date.getHours();

  const dayNum = `0${day}`.slice(-2);
  const monthNum = `0${month}`.slice(-2);

  return `${year}${monthNum}${dayNum}${hour}00`;
};
