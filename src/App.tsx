import {useState} from "react";
import ListOfActivites from "./components/ListOfActivites.tsx";
import {Clipboard} from "lucide-react";

function App() {
    const [value, setValue] = useState("")
    const [list, setList] = useState<{ id: number; item: string, completed: boolean}[]>([]);

    const handleAdd = () => {
        if (!value.trim()) return;
        const newItem = {
            id: Date.now(),
            item: value,
            completed: false,
        };
        setList((prev) => [...prev, newItem]);
    }

    const totalTask =  list.length;
    const doneTask = list.filter(item => item.completed).length
    const progressTask = totalTask > 0 ? Math.round((doneTask / totalTask) * 100) : 0;




  return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#09090B] transition-all">
          <div className="w-full max-w-md">
              <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative">

                      <div className="flex flex-row items-center gap-2">
                          <div className="-p-2 w-13 h-13 flex justify-center items-center text-white bg-[#009EFF] rounded-2xl">
                              <Clipboard />
                          </div>
                          <div>
                              <p className="text-white text-2xl">React Todo</p>
                              <p className="text-[#414E56]">Stay productive</p>
                          </div>
                      </div>

                      <div className="flex items-center justify-between py-4">
                          <div className="flex justify-center items-center w-30 h-22 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                              <div className="flex flex-col justify-center items-center">
                                  <p className="text-[#00CAE9] text-3xl ">{totalTask}</p>
                                  <p className="text-[#414E56] text-sm">Total</p>
                              </div>
                          </div>
                          <div className="flex justify-center items-center w-30 h-22 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                              <div className="flex flex-col justify-center items-center">
                                  <p className="text-[#00D492] text-3xl ">{doneTask}</p>
                                  <p className="text-[#414E56] text-sm">Done</p>
                              </div>
                          </div>
                          <div className="flex justify-center items-center w-30 h-22 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                              <div className="flex flex-col justify-center items-center">
                                  <p className="text-[#FFB900] text-3xl ">{progressTask}%</p>
                                  <p className="text-[#414E56] text-sm">Progress</p>
                              </div>
                          </div>
                      </div>

                          <div className="flex items-center justify-between py-4 gap-2">
                              <input
                                  type="text"
                                  value={value}
                                  placeholder="Add a new task..."
                                  onChange={(e) => setValue(e.target.value)}
                                  className="flex-1 px-4 py-3 bg-zinc-800/50 border border-[#414E56] rounded-xl shadow-2xl focus:outline-none focus:border-cyan-500  text-white placeholder:text-zinc-500 transition-colors"
                              />
                              <button
                                  onClick={() =>{
                                      handleAdd()
                                      setValue("")
                                  }}
                                  className="w-15 h-13 bg-cyan-500 rounded-xl text-white hover:bg-cyan-600 cursor-pointer transition-colors"
                              >
                                  Add
                              </button>
                          </div>



                      {list.length === 0 ? (
                          <p className="text-center text-zinc-500 py-8">No tasks yet. Add one above!</p>
                      ) : list.map((item) => (
                          <ul key={item.id}>
                              <ListOfActivites key={item.id}  id={item.id} item={item.item} completed={item.completed} list={list} setList={setList} />
                          </ul>
                       ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App

