/* eslint-disable react/jsx-key */
import React from "react";
import { useSelector,useDispatch } from "react-redux";

export default function CardThread({ data }) {
  const newData = data.slice(0, 3);

  const mode  = useSelector((state)=> state.darkMode.mode);
  const dispatch =useDispatch();
  console.log(mode)

  return (
    <div className="mt-20 md:flex justify-between w-12/12">
      {newData.map((item, i) => {
        return (
          <div className="my-10 w-[400px]" key={i}>
            <img
              src={item.image}
              alt=""
              className="sm:w-[200px] md:w-[420px] rounded-lg h-64 border-2 border-red-600  bg-contain"
            />

            <h1 className={mode ?"text-2xl font-bold py-3 text-white": "text-2xl font-bold py-3"}>Blog title</h1>
            <p className={mode ? "text-white" : null}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ipsum, similique facilis reprehenderit deserunt nostrum odit omnis
              nemo perspiciatis minus aliquam necessitatibus. Ab nisi dolore
              quis, iure iste deleniti autem!
            </p>
          </div>
        );
      })}
    </div>
  );
}