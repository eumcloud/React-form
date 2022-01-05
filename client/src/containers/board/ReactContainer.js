import { useEffect, useState } from "react";
import axios from "axios";

export default function ReactContainer() {

  const [inputData, setInputData] = useState([{
    bidx: '',
    buserid: 'b',
    btitle: '',
    bcontent: '',
    regdate: '',
    modidate: '',
    bhit: '',
    blikeuser: ''
  },
  {
    bidx: '',
    buserid: '',
    btitle: '',
    bcontent: '',
    regdate: '',
    modidate: '',
    bhit: '',
    blikeuser: ''
  }])

  const {bidx, buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser} =inputData;

  const callApi = async() => {
    const response = await axios.get("http://localhost:5000/api/boards")
    // const _inputData = await response.data.map((rowData) => ({
    //   bidx: rowData.bidx,
    //   title: rowData.btitle,
    //   content: rowData.bcontent,
    //   writer: rowData.bidx,
    //   write_date: rowData.bidx,
    // }))
    console.log(inputData)
    console.log(response.data)
    // setInputData({...inputData, bidx:"ssssss", sdfsdf:"asda"})
    setInputData([...inputData,...response.data])
  }
  
  useEffect(() => {
    callApi();
  }, []);

  console.log(inputData)
  return (inputData.map(a => {
    return (<div>{a.buserid}</div>)
  })
  )
}


