{/* <div id = 'par'>
    <h1> hey </h1>
    <h2> hello </h2>
</div> */}


const h = React.createElement("div", { id: 'par' },[React.createElement("h1", { key: 'sa'}, 'Hello from React!') , React.createElement("h2", {key: 'ye'}, 'heya')] );
console.log(h)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h);