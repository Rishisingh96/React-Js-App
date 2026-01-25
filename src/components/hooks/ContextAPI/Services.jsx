import { useBioContext } from ".";

export const Services = () => {
  const { myName, myAge } = useBioContext();

  return (
    <section
    >
      <h1 className="text-7xl md:text-8xl font-semibold mb-5 text-center text-white">
        Hello Context API (Services). My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};
