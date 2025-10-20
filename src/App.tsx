import {useState} from "react";
import ListOfActivites from "./components/ListOfActivites.tsx";

function App() {
    const [values, setValues] = useState("")
    const [list, setList] = useState<{ id: number; item: string }[]>([]);

    const handleAdd = () => {
        if (!values.trim()) return;
        const newItem = {
            id: Date.now(),
            item: values,
        };
        setList((prev) => [...prev, newItem]);
    }
    console.log(list);



  return (

    <div className="flex justify-center items-center min-h-screen bg-white">

      <div className="w-[600px] bg-linear-to-r/decreasing rounded-2xl from-indigo-500 to-teal-400 flex  justify-center">
          <ul>
              <li className=" flex gap-2">
                  <input type="text" placeholder="What do you want to do" className={`w-[400px] mb-10 h-[60px] border border-gray-500 outline-none rounded-lg
               mt-7 bg-indigo-500 hover:border-white transition-all color-white text-white placeholder-gray-300 `} value={values} onChange={(e) => setValues(e.target.value)} />
                  <button className="w-[60px] h-[60px] bg-blue-600 mt-7 rounded-lg cursor-pointer hover:scale-95 hover:border border-white disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleAdd()} disabled={values === ""}>
                  Add
                  </button>
              </li>

              {list.map((item) => (
                      <ListOfActivites key={item.id}  id={item.id} item={item.item} list={list} setList={setList} />
                  ))}



          </ul>




      </div>
    </div>
  )
}

export default App
