import React from "react";

export const Button = ({ accion, texto }) => {
  return (
    <button
      onClick={accion}
      className="mt-3 bg-indigo-300 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
    >
      {texto}
    </button>
  );
};
