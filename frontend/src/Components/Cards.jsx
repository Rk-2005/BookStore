import React from "react";

function Cards(data) {
  
  return (
    <>
      <div className="mt-4 hover:scale-102 duration-300 ">
        <div className="card bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border-white dark:border ">
          <figure>
            <img
              src={data.data.image}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.data.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{data.data.title}</p>
            <div className="card-actions justify-between mt-2  ">
              <div className=" p-3 rounded-2xl  dark:text-amber-50 dark:border  dark:border-amber-50">${data.data.price}</div>
              <div className=" rounded-2xl dark:text-pink-500  border dark:border-white cursor-pointer hover:text-pink-500 duration-300 p-3">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
