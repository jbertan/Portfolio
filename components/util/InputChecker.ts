export const PasswordChecker = (pass: string) => {
  if (
    pass === "" ||
    pass.length < 6 ||
    pass.includes("/") ||
    pass.includes("//")
  ) {
    return false;
  } else {
    return true;
  }
};
