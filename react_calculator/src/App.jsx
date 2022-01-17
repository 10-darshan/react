import {sum, sub, mul, div} from './Calculator';
function App() {
    return (
        <>
    <h1>Calculator</h1>
    <h2>{sum(100,2)}</h2>
    <h2>{sub(100,2)}</h2>
    <h2>{mul(100,2)}</h2>
    <h2>{div(100,3)}</h2>
    </>
    );
}
export default App;