import React, { FC, SetStateAction, useState, Dispatch } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Select, Button, Typography } from 'antd';
import { StyledPg } from './Pagination.styled';

export interface PaginationProps {
  currentPage: number;
  handleNext: (data: number) => void;
  handlePrev: (data: number) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalResult: number;
  className?: string;
}
export const Pagination: FC<PaginationProps> = ({
  currentPage,
  handleNext,
  handlePrev,
  setCurrentPage,
  totalResult,
  className,
}) => {
  const pageSize = 10;
  const startRecordNo = pageSize * (currentPage - 1) + 1;
  const endRecordNo = pageSize * (currentPage - 1) + pageSize;
  const len = Math.ceil(totalResult / pageSize);
  return (
    <StyledPg className={className}>
      <p>The Page you are on</p>
      <Select
        style={{ width: '90px' }}
        value={currentPage}
        onChange={(val) => {
          setCurrentPage(val);
        }}
      >
        {Array.from({ length: len }, (_, index) => index + 1)?.map((e) => (
          <option key={e} value={e.toString()}>
            {e}
          </option>
        ))}
      </Select>
      <Button
        disabled={currentPage <= 1}
        className="nav-btns"
        onClick={() => handlePrev(currentPage - 1)}
      >
        <AiOutlineLeft />
      </Button>
      <Button
        disabled={currentPage >= len}
        className="nav-btns"
        onClick={() => handleNext(currentPage + 1)}
      >
        <AiOutlineRight />
      </Button>
      <Typography style={{ fontWeight: '500' }}>
        Showing {startRecordNo} - {endRecordNo} of {totalResult} records
      </Typography>
    </StyledPg>
  );
};
