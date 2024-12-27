import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
const News = () => {
    const[news,setnews] = useState([]);
    useEffect(() =>{
        axios
          .get("http://localhost:3000/api/news")
          .then((res) => {
            console.log(res.data);
            setnews(res.data);
          })
          .catch(function(error){
            console.log(error);
          })
          .finally(function(){

          },[]);
          return(
            <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          )
    });
};
export default News;