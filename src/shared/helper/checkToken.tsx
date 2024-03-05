export const checkToken = () => {
  if (!localStorage.getItem("access_token")) {
    window.location.href = "/";
  } else return;
};
