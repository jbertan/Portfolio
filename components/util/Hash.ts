var bcrypt = require("bcryptjs");

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  const similar = await bcrypt.compare(password, hash);
  return similar;
};
