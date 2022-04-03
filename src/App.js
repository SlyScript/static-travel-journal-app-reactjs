import './App.css';
import data from "./data"
import Header from './components/Header'
import Card from './components/Cards'


export default function App() {
  const cardData = data.map(item => {
    return (
      <Card  
      key = {item.id}
      item ={item}

      // image = {item.imageUrl}
      // location = {item.location}
      // map = {item.googleMapsUrl}
      // title = {item.title}
      // startDate = {item.startDate}
      // endDate = {item.endDate}
      // description = {item.description}
      />
    )  
})
    return (
      <div className="App">
        <Header />
        {cardData}
      </div> 
    );
}

