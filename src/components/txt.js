<div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Focus on studies</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e,i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                  <option value="Half">Half</option>
                  <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>


// mongoimport --uri mongodb+srv://shantanu22:chiku2201@cluster0.5owjrww.mongodb.net/gofoodmern --collection food_items --jsonArray --file "/users/shantanukumarsingh/desktop/foodData2.json"
// mongoimport --uri mongodb+srv://shantanu22:<PASSWORD>@cluster0.5owjrww.mongodb.net/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --file <FILENAME>
// mongosh "mongodb+srv://cluster0.luaqqsb.mongodb.net/gofoodmern" --apiVersion 1 --username shantanukr2201
// mongosh "mongodb+srv://cluster0.5owjrww.mongodb.net/gofoodmern" --apiVersion 1 --username shantanu22


