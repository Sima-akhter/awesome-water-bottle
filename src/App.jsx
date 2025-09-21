import { Suspense } from "react"
import Bottles from "./components/Bottles"


const bottlesPromise = fetch('./bottles.json')
.then(res=> res.json());
function App() {
  

  return (
    <>
    <Suspense fallback = {<h3 className="text-3xl font-bold text-center mt-10">Bottles are loading.......</h3>}>
       <Bottles bottlesPromise={bottlesPromise}/>
    </Suspense>
    </>
  )
}

export default App
