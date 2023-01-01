import useAxios from "./hooks/useAxios";

const App = () => {
  const [response, error] = useAxios({
    method: "GET",
    url: "/todos",
  });

  return (
    <>
      <div>{JSON.stringify(response)}</div>
      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
};

export default App;
