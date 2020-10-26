export default ({ next, prev }) => {
  const selectedPage = (next && next - 1) || (prev && prev + 1)
  return selectedPage;
};
