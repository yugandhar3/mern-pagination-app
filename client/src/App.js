import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  useEffect(() => {
    const getData = async () => {
      await axios.get(`http://localhost:5000/api/data?page=${page}&pageSize=${pageSize}`).then((res) => {
        setData(res.data.paginatedData)
      })
    }
    getData()
  }, [page])
  const handleNext = () => {
    if (page === data.length - 1) {
      setPage(1)
    } else {
      setPage((prev) => prev + 1)
    }

  }
  const handleprev = () => {
    if (page === 0) {
      setPage(data.length - 1)
    } else {
      setPage((prev) => prev - 1)
    }

  }
  console.log(data)
  return (
    <div className="App">
      hello world
      {data.map((item) =>
        <h1>{item.name}</h1>)}

      <button onClick={handleprev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
