import { FC, ReactElement } from "react";

import { headingType } from "./types";

import "./Table.scss";

type TablePropsTypes = {
  headings: headingType[];
  data: Array<any>;
  keyForIterate: string;
  isActions?: boolean;
  editClassName?: string;
  deleteClassName?: string;
  editHandler?: () => void;
  deleteHandler?: () => void;
};

export const Table: FC<TablePropsTypes> = ({
  headings,
  data,
  isActions,
  keyForIterate,
  editClassName,
  deleteClassName,
  editHandler,
  deleteHandler,
}): ReactElement => (
  <table className="table">
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
    <tbody className="tbody">
      {data?.map((item) => (
        <tr key={item?.id} onClick={item?.handleClick && undefined}>
          {Object.values(item[keyForIterate])?.map((cell: any) => (
            <td className={`${cell?.classes}`} key={cell?.content}>
              {cell?.content}
            </td>
          ))}
          {isActions && (
            <td className="btn-actions">
              <button
                className={`btn-icon ${editClassName ?? ""}`}
                onClick={editHandler ?? undefined}
              ></button>
              <button
                className={`btn-icon ${deleteClassName ?? ""}`}
                onClick={deleteHandler ?? undefined}
              ></button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
