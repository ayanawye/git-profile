export const getGitHubCode = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  if (code) {
    return code;
  } else {
    return "";
  }
};
