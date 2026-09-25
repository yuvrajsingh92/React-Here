import Card from "./componest/Card.jsx";

const App = () => {
  return (
    //? In this return we can only pass 1 div but what id we want to pass 2 div 3 or 4 div without an parent div then what to do. Then we create fragments or empty div
    // <>
    //   <div className="dad"></div>
    //   <div className="chacha"></div>
    //   {cards()}
    // </>
    <div className="parent">
      <Card username="Real Nigga" about_you ="Real YN"/>
    </div>
  );
};

export default App;
