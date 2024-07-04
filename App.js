


const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from react");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(heading);

/*
<div id ="parent">
   <div id="child">
      <h1>hellow world</h1>
   </div>
   <div id="child2">
   <h1>hello world2</h1>
   <h2>hello world3</h2>
   </div>
</div>
*/

const elem = React.createElement("div", {
    id: "parent"
},
    [React.createElement("div", {
        id: "child"
    },
        React.createElement("h1", {
            id: "headinf"
        }, "helloe world")
    )

        ,
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "hello world2"),
        React.createElement("h2", {}, "hello world3")
    ])
    ]
)

const root1 = ReactDOM.createRoot(document.getElementById('root'))

root1.render(elem)