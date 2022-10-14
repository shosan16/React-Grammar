const App = () => {
const [num, setNum] = useState(0);
const [faceShowFlag, setFaceShowFlag] = useState(true);

const onClickCountUp = () => {
setNum(num + 1);
};
const onClickSwitchShowFlag = () => {
setFaceShowFlag(!faceShowFlag);
}
