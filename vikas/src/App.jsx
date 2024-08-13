
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import TraditionalFetch from "./components/TraditionalFetch";

import RqFetch from "./components/RqFetch";
import Navbar from "./components/Navbar";
import SingleEmployeeData from "./components/SingleEmployeeData";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallelQuery from "./components/DynamicParallelQuery";
import Dependent from "./components/Dependent";
import InfiniteQuery from "./components/InfiniteQuery";
import Post from "./components/Post";
function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee/:eid" element={<SingleEmployeeData />} />
      <Route path="/tradition" element={<TraditionalFetch />} />
      <Route path="/react-query" element={<RqFetch />} />
      <Route path="/parallel" element={<ParallelQueries />} />
      <Route path="/dynamic-parallel" element={<DynamicParallelQuery />} />
      <Route path="/dependent" element={<Dependent email={"vikas@gmail.com"} />} />
      <Route path="/infinite-query" element={<InfiniteQuery />} />
      <Route path="/post" element={<Post/>}/>
    </Routes>

  </>
}

export default App;

