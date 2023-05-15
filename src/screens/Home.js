import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  const [search, setsearch] = useState("");
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setfoodItem(response[0]);
    setfoodCat(response[1]);
    // console.log(foodCat);
    // console.log(foodItem);
    // console.log(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2 w-75 bg-white text-dark"
                type="search"
                placeholder="Search in here...."
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700?pizza"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700?drink"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700?cake"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        { foodCat
          && foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data.id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }}/>
                  {foodItem !== []? foodItem.filter(
                        (item) =>
                          (item.CategoryName === data.CategoryName) &&
                          (item.name.toLowerCase().includes(search.toLowerCase()))
                      )?.map((filterItems) => {
                        return (
                          <div
                            key={filterItems.id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              // foodName={filterItems.name}
                              foodItems={filterItems}
                              options={filterItems.options[0]}
                              // imgSrc={filterItems.img}
                            ></Card>
                          </div>
                        );
                      })
                   :<div>No such data found</div>
                  }
                </div>
              );
            })
          }
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
