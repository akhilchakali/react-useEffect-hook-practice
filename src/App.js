import {useState, useEffect} from 'react'

import Item from './item'

const App =() =>{
  const [apiData,setApiData] = useState([])
  
  useEffect(()=>{
    const data = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const responseData = await response.json()
      setApiData([...responseData])
    }
    data();
  },[apiData])

  return(
    <div>
      <p>Akhil</p>
      {apiData.map(each=>(<Item key={each.id} details={each}/>))}
    </div>
  )
}
export default App