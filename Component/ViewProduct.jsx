import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CurrencyRupee, Star } from '@mui/icons-material';
import '../Styles/productpage.css'
const ViewProduct = () => {
  let { username } = useParams()
  console.log(username);
  let [data, setData] = useState([])
  let [pd, setPd] = useState([])
  useEffect(() => {
    axios.get("http://localhost:7373/products")
      .then((res) => {
        setData(res.data)
        setPd(data.filter((x) => {
          return x.id == username
        }))
        console.log(pd[0].name)
      }).catch(() => {
      })
  }, [data])
  return (
    <div className="viewproduct">
      {pd.map((x) => {
        return (
          <div className="content">
            <img src={x.img} alt="" />
            <div className="right">
              <h1 id='dishname'>{x.name} <span><Star id='star'/>{x.ratings}</span></h1>
              <h3 id='resname'>{x.restaurant}</h3>
              <h2 id='price'><CurrencyRupee/>{x.price}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ViewProduct