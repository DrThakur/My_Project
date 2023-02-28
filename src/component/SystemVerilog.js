import React from "react";
import DynamicTable from "./BasicTable";
// import ComingSoon from "./ComingSoon";
import uvmdata from "./uvmdata";

const SystemVerilog = () => {
  return (
    <div>
      <DynamicTable data={uvmdata} />

      {/* <ComingSoon /> */}
    </div>
  );
};

export default SystemVerilog;
