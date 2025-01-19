import React, { useState } from "react";
import { colors } from "../../../utils/colors";
import clnm from "classnames";
import outSelectStatus from "../../../utils/outSelectStatus";

export default function RenderString({ item }) {
  const [bgColor, setBgColor] = useState("table-warning");
  const [bool, setBool] = useState(true);
  const startColor =
    item.status === "В пути"
      ? "table-primary"
      : item.status === "Доставлен"
      ? "table-success"
      : "table-warning";
  const options = outSelectStatus(startColor);
  const selectStatus = (
    <td
      className={clnm(
        "form",
        { [`${startColor}`]: bool },
        { [`${bgColor}`]: !bool }
      )}
      onChange={handlerSelect}
    >
      <select
        className={clnm(
          "form-select",
          { [`${startColor}`]: bool },
          { [`${bgColor}`]: !bool }
        )}
      >
        {options}
      </select>
    </td>
  );

  function handlerSelect(e) {
    const targ = e.target;
    const departureDate =
      targ.closest(".form").parentElement.lastChild.textContent;
    if (Date.parse(departureDate) > Date.now() && targ.value * 1 === 3) {
      alert("Нельзя сделать статус <доставлен> не отправленному грузу");
      return;
    }
    setBool(!bool);
    const chosenNum = targ.value * 1;
    setBgColor("table-" + colors[chosenNum]);
  }
  return (
    <tr
      className={clnm({ [`${startColor}`]: bool }, { [`${bgColor}`]: !bool })}
    >
      <td>{item.id}</td>
      <td>{item.name}</td>
      {selectStatus}
      <td>{item.origin}</td>
      <td>{item.destination}</td>
      <td>{item.departureDate}</td>
    </tr>
  );
}
