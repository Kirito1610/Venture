import { investment } from "@/Assests";
import { Database, Info } from "lucide-react";

function Investment () {
  
  return (
    <div className="bg-white h-max border border-gray-100 shadow rounded-sm p-4 w-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
          <Database className="w-4 h-4" />
          Spent
        </div>
        <Info className="w-4 h-4 text-gray-400" />
      </div>

      {/* Amount + Percentage */}
      <div className="flex items-end gap-2">
        <p className="text-2xl flex text-gray-900">
          $ {investment.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Investment;
