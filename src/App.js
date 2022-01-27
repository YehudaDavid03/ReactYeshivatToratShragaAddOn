// Importing all libraries
import React, { useState, useEffect } from "react"
import ShragaBlack1 from "./assets/Shraga_black-1.png"
import { data } from "./data"

function App() {
  const [editable, setEditable] = useState(null)
  const [upload, setUpload] = useState(false)
  const [checkboxMain, setCheckboxMain] = useState(false)
  console.log(upload)

  return (
    <div className="edit-main-page">
      <div className="edit-main-page-top">
        <h1>YTS <span>Firebase</span> Uploader</h1>
        <span className="material-icons-outlined">chevron_right</span>
      </div>

      <div className="edit-main-page-data">
        <div className="edit-main-page-data-one">
          <h1>Side Navigation</h1>
        </div>

        <div className="edit-main-page-data-two">
          <h1>Table</h1>
          <div>
            <p onClick={() => {upload ? alert("Upload already in progress please finish to continue") : setUpload(true)}} ><span className="material-icons">upload</span>Upload</p>
            <p onClick={() => {alert("Implement filter data")}}><span className="material-icons">filter_list</span>Filter</p>
            <input onChange={() => {alert("Implement Search capability")}} type="text"  placeholder="Search..." />
          </div>

          <table>
            <tr>
              <th><input type="checkbox" onClick={() => {setCheckboxMain(!checkboxMain)}} /></th>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Tags</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>

            {
              upload ? 

              (
                <tr>
                  <td><input type="checkbox" disabled="disabled" /></td>
                  <td><input type="text" placeholder="" disabled="disabled" /></td>
                  <td><input type="text" placeholder="Add Title" /></td>
                  <td><input type="text" placeholder="Add Author" /></td>
                  <td><input type="text" placeholder="Add Tags" /></td>
                  <td><input type="date" placeholder="Add Date" /></td>
                  <td><span onClick={() => {setUpload(false); alert("Implement upload data")}} style={{color: "green"}} className="material-icons">done</span></td>
                  <td><span onClick={() => {setUpload(false); alert("Implement cancel upload data")}} style={{color: "red"}} className="material-icons">close</span></td>
                </tr>
              )

              :

              (<></>)
            }

            {
              data?.map((item) => {               
                return (
                  <tr>
                    <td><input type="checkbox" checked={checkboxMain ? "checked" : null} /></td>
                    <td>{editable == item.id ? (<input type="text" value={item.id} />) : (item.id)}</td>
                    <td>{editable == item.id ? (<input type="text" value={item.title} />) : (item.title)}</td>
                    <td>{editable == item.id ? (<input type="text" value={item.author} />) : (item.author)}</td>

                    <td>
                      {
                        item.tags?.map((data) => {               
                          return (
                            editable == item.id 
                            
                            ? 
                            
                            (<div><input type="text" value={data.tag} /><span onClick={() => {alert("Implement delete tag")}} style={{color: "red"}} className="material-icons">close</span></div>)
                            
                            : 
                            
                            (`${data.tag}, `)
                          )
                        })
                      }
                    </td>

                    <td>{editable == item.id ? (<input type="date" value={item.date} />) : (item.date)}</td>
                    {
                      editable == item.id 
                      
                      ? 
                      
                      (<td><span onClick={() => {setEditable(null); alert("Implement edit row")}} style={{color: "green"}} className="material-icons">done</span></td>)
                      
                      : 
                      
                      (<td><span onClick={() => {setEditable(item.id)}} style={{color: "green"}} className="material-icons">edit</span></td>)
                      
                    }

                    {
                    
                      editable == item.id 
                      
                      ? 
                      
                      (<td><span onClick={() => {setEditable(null); alert("Implement cancel edit row")}} style={{color: "red"}} className="material-icons">close</span></td>)
                      
                      : 
                      
                      (<td><span onClick={() => {alert("Implement delete row")}} style={{color: "red"}} className="material-icons">delete</span></td>)
                      
                    }
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default App