import {type Dispatch, type SetStateAction} from "react";

interface ActivitesProps {
    item: string,
    id:number,
    completed: boolean,
    list: Array<any>,
    setList:  Dispatch<SetStateAction<{
        id: number,
        item: string,
        completed: boolean
    }[]>>

}

function ListOfActivites ({item, id, list, completed, setList}: ActivitesProps) {
    const handleDelete = (id:number | string) =>{
        return setList(list.filter((item) => item.id !== id))
    }
    const hadleToggle = (id:number) =>{
        setList(list.map(task =>
            task.id === id ? {...task, completed: !task.completed } : task
        ))
    }

    return (
            <li key={id}>
                <div className={`group flex items-center gap-3 p-4 rounded-xl border transition-all mb-2 ${
                    completed ? "bg-zinc-900/30 border-zinc-800/50" : "bg-zinc-900/30 border-zinc-800"
                }`}>
                    <button
                        onClick={() => hadleToggle(id)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            completed
                                ? 'bg-cyan-500 border-cyan-500'
                                : 'border-zinc-600 hover:border-cyan-500'
                        }`}
                    >
                        {completed && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </button>

                    <span className={`flex-1 ${completed ? 'text-zinc-400 line-through' : 'text-white'}`}>
                        {item}
                    </span>

                    <button
                        onClick={() => {
                            handleDelete(id)
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 transition-all hover:text-red-400 text-zinc-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>


                </div>
            </li>
    )
}

export default ListOfActivites;