import { useEffect, useRef, useState } from "react";
import { Button } from "./FieldRandomPoints";
import Canvas from '../components/Canvas'

const ExcelRandomPoints = () => {
const [t,setT] = useState(false)
const side=useRef();
const selection=useRef();
const [data,setData]=useState([])
const handleSubmit = (e) => {
e.preventDefault();
console.log("ss")
const sel= selection.current.value
const sid= side.current.value

if (!sid || !sel )
alert("All Fields are mandatory!")
else
setT(true)
}
useEffect(()=>{
if(data)
console.log(data)
},[data])
return (
		<>
			<table className="p-5 m-5" onSubmit={handleSubmit}>
				<tbody>
					<tr>
						<td>
							<h1 className="text-2xl font-semibold py-4 text-justify ">Excel Random Points</h1>
						</td>
					</tr>

					<tr>
						<td className="text-justify">Enter Side</td>
						<td>
							<input className="form-control" ref={side} type="number" name="side" />
						</td>
					</tr>

					<tr>
						<td className="text-justify">
							<p>
								For Sequential/Ordered Selection, <br /> Enter "0"
								For Random Selection, <br />Enter the Column for First Point
							</p>
						</td>
						<td>
							<input className="form-control" type="number" ref={selection} name="selection" />
						</td>
					</tr>

					{/* <tr>
						<td className="flex justify-start">
							<input type="submit" className="form-submit my-4" />
						</td>
					</tr> */}
					<tr>
						<td className="flex justify-start">
							<Button 
							onClick={handleSubmit}>Submit</Button>
							{/* <input type="submit" className="form-submit my-4" /> */}
						</td>
					</tr>
				</tbody>
			</table>
			{t && 
		<Canvas side={side.current.value} selection={selection.current.value}  type="excel"/>}
		</>
	)
}

export default ExcelRandomPoints;