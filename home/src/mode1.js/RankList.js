import {room} from  './Joinroom'
const Ranklist = () => {
    let rankArray;
  console.log(room);
    fetch("http://localhost:5000/ranklist", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          room:room,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.rank.scoreArray, "Ranklist-Received");
          rankArray=data.rank.scoreArray;
          rankArray.map((pos)=>
          {
            console.log(pos.username," ",pos.score)
          })
        });


    return (  
 <div >
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
      <table>
        <tr>
          <th> Name</th>
          <th> Score</th>
          </tr>
       {rankArray && rankArray.map((n) => (
        <tr>
          
          <td>{n.username}</td>
          <td>{n.score}</td>
        </tr>
      ))}
    </table>
      </div>
    );
}

export default Ranklist;