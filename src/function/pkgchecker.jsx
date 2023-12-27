
const checker = (param) => {
  const vault = store.filter((pack) => {
    console.log(param, pack.id)
    return pack.id == param
  });
  console.log("Result -> ", vault)

  if (vault[0]) {
    if (vault[0].name === param) {
      console.log(vault[0].name, param)
      return true;
    }
  }
  return false;

}
export default checker;