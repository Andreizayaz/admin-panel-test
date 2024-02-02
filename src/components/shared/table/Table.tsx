import { FC, ReactElement, MouseEvent } from "react";

import { headingType } from "./types";

import "./Table.scss";

type TablePropsTypes = {
  headings: headingType[];
  data: Array<any>;
  keyForIterate: string;
  noDataMsg?: string;
  isActions?: boolean;
  editClassName?: string;
  deleteClassName?: string;
  tableClasses?: string;
  editHandler?: () => void;
  deleteHandler?: () => void;
  clickTableRow?: (
    e: MouseEvent<HTMLTableSectionElement, globalThis.MouseEvent>
  ) => void;
};

export const Table: FC<TablePropsTypes> = ({
  headings,
  data,
  isActions,
  keyForIterate,
  editClassName,
  deleteClassName,
  noDataMsg,
  tableClasses,
  editHandler,
  deleteHandler,
  clickTableRow,
}): ReactElement => (
  <table className={`table ${tableClasses ?? ""}`}>
    <thead className="thead">
      <tr>
        {headings.map(({ heading, classes, clickHandler }) => (
          <th
            key={heading}
            className={`${classes ?? ""}`}
            onClick={clickHandler ?? undefined}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
    {!data?.length ? (
      <p className="no-data">{noDataMsg}</p>
    ) : (
      <tbody
        className="tbody"
        onClick={clickTableRow ? (e) => clickTableRow(e) : undefined}
      >
        {data?.map((item) => (
          <tr
            id={item?.id}
            key={item?.id}
            onClick={item?.handleClick && undefined}
          >
            {Object.values(item[keyForIterate])?.map((cell: any) => (
              <td className={`${cell?.classes}`} key={cell?.content}>
                {cell?.content}
              </td>
            ))}
            {isActions && (
              <td className="btn-actions">
                <button
                  className={`btn-icon bg-image ${editClassName ?? ""}`}
                  onClick={editHandler ?? undefined}
                ></button>
                <button
                  className={`btn-icon bg-image ${deleteClassName ?? ""}`}
                  onClick={deleteHandler ?? undefined}
                ></button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    )}
  </table>
);
