export default ({ next, prev }) => {
  const selectedPage = (next && next - 1) || (prev && prev + 1)
  console.log(selectedPage)
  return selectedPage;
};
