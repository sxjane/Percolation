// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const Index = props => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// );

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();

//     console.log(`Show data fetched. Count: ${data.length}`);

//     return {
//         shows: data.map(entry => entry.show)
//     };
// };

// export default Index;
import axios from "axios";

const Index = () => (
    <div>
        <button onClick={()=>{console.log("click");}}>Show Matrix</button>
    </div>
);
export default Index;
function showMatrix(){
    console.log("click");
    const response = fetch('https://localhost:3000', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        })
    });
    console.log(response);
}