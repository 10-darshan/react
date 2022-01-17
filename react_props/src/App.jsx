import Card from './Card';
import Data from './Data';
function App() {
    return (
        <>
          <h1 className="heading">Top 5 Wireless Earphones under INR 5000</h1>
          {Data.map((value)=>{
             return (
               <Card key={value.id}
                   imgSrc={value.imgSrc}
                   link={value.link}
                   title={value.title}
                   description={value.description}/>
            );
          })}
       </>
    );
}

export default App;