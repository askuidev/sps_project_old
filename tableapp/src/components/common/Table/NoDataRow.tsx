import * as React from 'react';
import { NoDataRowProps } from '../../../types';

const NoDataRow = (props: NoDataRowProps) => {
    return (
      <tbody>
          <tr>
              <td colSpan={props.colSpan} className="table-footer-cell-padding text-center">{props.message}</td>
          </tr>
      </tbody>
    );
};

export default NoDataRow;
