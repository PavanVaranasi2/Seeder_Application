import React from 'react';
import { Box, styled, SxProps, Theme, TypographyOwnProps,BoxProps } from '@mui/material';
import { DataGrid, DataGridProps, GridRowId, GridRowParams, GridRenderCellParams, GridSlotsComponent} from '@mui/x-data-grid';
import CheckBox from '../../atoms/CheckBox/index';
import  TypographyAtom  from '../../atoms/Typography/index';
import StyledChip from '../../atoms/Chip/index';
import theme from '../../../theme/index';

const DualTextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '12px 20px',
  gap: '8px',
});

const ChipContainer = styled(Box)({
  padding: '12px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '4px',
  background: 'none',
  flexWrap: 'wrap',
});

const ChipBox = styled(Box)({
  marginTop: '-1%',
  marginLeft: '-80%',
  width: '40%', 
  '@media (max-width: 600px)': {
    marginLeft: '-60%', 
    marginTop: '-1%',
    width: '110%', 
  },
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
});

const CustomTextContainer = styled(Box)<{ marginTop: number }>(({ marginTop }) => ({
  marginTop: `${marginTop}px`,
}));

const DualTextLeftBox = styled(Box)({
  marginLeft: '-80%',
});

const DualTextRightBox = styled(Box)({
  marginLeft: '-78px',
});

export const customText = (
  text: string,
  variant: TypographyOwnProps['variant'],
  color?: string,
  marginTop?: number
) => {
  return (
    <CustomTextContainer marginTop={marginTop ?? 0}>
      <TypographyAtom
        variant={variant}
        color={color ?? theme.palette.text.lowEmphasis}
        id="customText"
      >
        {text}
      </TypographyAtom>
    </CustomTextContainer>
  );
};

export const customDualText = (data: string[]) => {
  return (
    <DualTextContainer>
      <DualTextLeftBox>
        <TypographyAtom variant="body2" color={theme.palette.text.lowEmphasis}>
          {data[0]}
        </TypographyAtom>
      </DualTextLeftBox>
      <DualTextRightBox>
        <TypographyAtom
          variant="caption"
          color={theme.palette.text.lowEmphasis}
        >
          {data[1]}
        </TypographyAtom>
      </DualTextRightBox>
    </DualTextContainer>
  );
};

export const customChips = (data: string) => {
  return (
    <ChipContainer>
      <ChipBox>
        <StyledChip
          variant="filled"
          backgroundColor={theme.palette.background.elevation2}
          height="25%"
          width="100%"
          label={
            <TypographyAtom variant="body2" color={theme.palette.text.mediumEmphasis}>
              {data}
            </TypographyAtom>
          }
        />
      </ChipBox>
    </ChipContainer>
  );
};

export interface ICustomColumnProps {
  field: string;
  headerText: string;
  valueColor?: string;
  width?: number;
  marginTop?: number;
  headerClassName?: string;
  cellClassName?: string;
}

export const customColumn = ({
  field,
  headerText,
  valueColor,
  width,
  marginTop,
  headerClassName,
  cellClassName,
}: ICustomColumnProps) => {
  return {
    field: field,
    width: width ?? 200,
    sortable: false,
    headerClassName: headerClassName,
    cellClassName: cellClassName,
    renderHeader: () => customText(headerText, 'body2', valueColor, 0),
    renderCell: (params: GridRenderCellParams) =>
      customText(params.value, 'body2', valueColor, marginTop ?? 0),
  };
};

const MainContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height:"100%"
});
const DataGridContainer = styled(Box)({
  width: '100%',
  height:'100vh',
  
});
export interface ISeederDataGridProps extends DataGridProps {
  enableRowSelection?: boolean;
  handleSelection?: React.Dispatch<React.SetStateAction<GridRowId[]>>;
  selectedRows?: GridRowId[];
  isSelectable?: (params: GridRowParams<any>) => boolean;
  sx?: React.CSSProperties;
noRowsOverlay?:any
slots?:Partial<GridSlotsComponent>;
boxComponent?: React.ReactElement<BoxProps>;
}

interface NoRowsOverlayProps extends React.HTMLAttributes<HTMLDivElement|undefined> {
  sx?: SxProps<Theme>;
  children?:React.ReactNode;
}
const ContractsTable: React.FC<ISeederDataGridProps> = ({
  rows,
  columns,
  enableRowSelection,
  handleSelection,
  selectedRows,
  isSelectable,
  noRowsOverlay,
  slots,
  boxComponent,
  sx,
}) => {
  const updatedColumns = columns.map(column => ({
    ...column,
    flex: 1,
    minWidth: 150,
  }));

const NoRowsOverlayComponent: React.FC<NoRowsOverlayProps> = ({ children, ...props }) => {
  return boxComponent ? boxComponent : null;
};

  return (
    <MainContainer>
      <DataGridContainer>
        <DataGrid
          rows={rows}
          columns={updatedColumns}
          {...(enableRowSelection ? { checkboxSelection: true } : {})}
          disableRowSelectionOnClick
          disableVirtualization
          hideFooter
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          slots={{
            baseCheckbox: CheckBox,
            noRowsOverlay: NoRowsOverlayComponent,
          }}
          
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={(rowIds: GridRowId[]) => {
            handleSelection?.(rowIds);
          }}
          
          isRowSelectable={isSelectable}
          data-testid="contracts"
        />
      </DataGridContainer>
    </MainContainer>
  );
};

export default ContractsTable;