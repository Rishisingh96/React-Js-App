import React from "react";

export const ParentComponent = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-3xl font-bold text-blue-400">
          Component A (Parent)
        </h1>

        <ChildComponent data="React JS" />
      </div>

    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <div className="w-full max-w-2xl bg-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg">
      <h2 className="text-xl font-semibold text-green-400">
        Component B (Child)
      </h2>

      <GrandChildComponent data={props.data} />
    </div>
  );
};

const GrandChildComponent = (props) => {
  return (
    <div className="w-full bg-gray-600 rounded-xl p-5 flex flex-col items-center gap-4">
      <h3 className="text-lg font-semibold text-yellow-300">
        Component C (Grand Child)
      </h3>
      <GrandGrandChildComponent data={props.data} />
    </div>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <div className="w-full bg-gray-500 rounded-lg p-4 text-center">
      <h4 className="text-lg font-bold text-pink-300">
        ❤️ I love {props.data}
      </h4>
    </div>
  );
};
