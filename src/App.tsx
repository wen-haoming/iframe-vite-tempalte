// import srcDoc from './dist/index.js?raw' // prod

// function AA() {
//   return (
//     <div className="App">
//       iframe --- ClassName
//       <iframe
//         onLoad={() => {
//           const iframeWin = (document.getElementById("example") as any).contentWindow as any;
//           iframeWin.postMessage('message', '*')
//         }}
//         id="example"
//         srcDoc={import.meta.env.DEV ? undefined : `<div id="root"></div>
//       <script type="module">${srcDoc}</script>
//       `}
//         src={import.meta.env.DEV ? '/index2.html' : undefined}
//         width={300}
//         height={300} />
//     </div>
//   )
// }

// export default AA


import MyLib from '../dist/my-lib.js';

function App() {

  return <div>2323<MyLib />333</div>
}

export default App
