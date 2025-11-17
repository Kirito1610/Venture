import React from 'react'

function ResponseTable({tabelData}:{tabelData:any}) {
  return (
    <div className=' w-full max-sm:w-[300px] max-sm:overflow-scroll'>
    <table className=" text-left border-collapse w-full mx-auto">
        <tbody>
          <tr className=" text-[#44444E] bg-[#efefef]">
            <th className=" px-3 py-1 font-medium border-[#dddddd]">S. No</th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">
              Campaign Name
            </th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">
              Amount Spent
            </th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">
              Revenue{" "}
            </th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">Plaform</th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">Status</th>
          </tr>
          {tabelData.map((item: any, index: number) => (
            <tr key={item.name}>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {index + 1}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {item.name}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                $ {item.spent}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                $ {item.revenue}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {item.platform}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  )
}

export default ResponseTable