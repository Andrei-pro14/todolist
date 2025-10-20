import {useState} from "react";
import {XIcon} from "lucide-react";
import * as React from "react";

interface ActivitesProps {
    item: string,
    id:number,
    list: Array<any>,
    setList: React.Dispatch<React.SetStateAction<{ id: number, item: string }[]>>

}

function ListOfActivites ({item, id, list, setList}: ActivitesProps) {
    const upperCaseFirstLetter = item.charAt(0).toUpperCase() + item.slice(1);
    const [checked, setChecked] = useState(false);

    const handleDelete = (id:number | string) =>{
        return setList(list.filter((item) => item.id !== id))
    }



    return (
        <ul className="w-[465px] h-[70px] bg-teal-700 py-6 rounded-lg px-13 mb-4">
            <li key={id}>

                <input id={`check-${id}`} type="checkbox" checked={checked}
                       className="flex -ml-9 -mt-[2px] w-[25px] h-[25px]"
                onChange={(e) => setChecked(e.target.checked)}/>
                <div className={`-mt-6 ${!checked ? "text-gray-200" : "transition-all line-through text-stone-800"}`}>
                    {upperCaseFirstLetter}
                </div>

                <XIcon className="flex ml-90 -mt-6 text-red-600 cursor-pointer" onClick={()=>handleDelete(id)}/>





            </li>
        </ul>
    )
}

export default ListOfActivites;