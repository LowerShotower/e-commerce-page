import { type FunctionComponent, type ReactNode } from 'react'
import { StyledPagination } from './Pagination.styles'

interface PaginationProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Pagination = ({ className, children, style }: PaginationProps) => {
  return (
    <StyledPagination className={`Pagination ${className}`} style={style}>
      {children}
    </StyledPagination>
  )
}

export default Pagination

// import React, { useState, useEffect } from 'react';

// interface Item {
//   id: number;
//   name: string;
//   description: string;
// }

// interface Pagination {
//   currentPage: number;
//   itemsPerPage: number;
// }

// const ITEMS: Item[] = [
//   { id: 1, name: 'Item 1', description: 'Description of Item 1' },
//   { id: 2, name: 'Item 2', description: 'Description of Item 2' },
//   { id: 3, name: 'Item 3', description: 'Description of Item 3' },
//   { id: 4, name: 'Item 4', description: 'Description of Item 4' },
//   { id: 5, name: 'Item 5', description: 'Description of Item 5' },
//   { id: 6, name: 'Item 6', description: 'Description of Item 6' },
//   { id: 7, name: 'Item 7', description: 'Description of Item 7' },
//   { id: 8, name: 'Item 8', description: 'Description of Item 8' },
//   { id: 9, name: 'Item 9', description: 'Description of Item 9' },
//   { id: 10, name: 'Item 10', description: 'Description of Item 10' },
// ];

// const ITEMS_PER_PAGE = 3;

// const PaginationExample = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);
//   const [items, setItems] = useState<Item[]>(ITEMS);

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = ITEMS.slice(startIndex, endIndex);
//     setItems(currentItems);
//   }, [currentPage, itemsPerPage]);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//           </li>
//         ))}
//       </ul>
//       <Pagination
//         currentPage={currentPage}
//         itemsPerPage={itemsPerPage}
//         totalItems={ITEMS.length}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// interface PaginationProps {
//   currentPage: number;
//   itemsPerPage: number;
//   totalItems: number;
//   onPageChange: (pageNumber: number) => void;
// }

// const Pagination = ({
//   currentPage,
//   itemsPerPage,
//   totalItems,
//   onPageChange,
// }: PaginationProps) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const pages = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(i);
//   }

//   return (
//     <div>
//       <ul>
//         {pages.map((pageNumber) => (
//           <li
//             key={pageNumber}
//             onClick={() => onPageChange(pageNumber)}
//             className={currentPage === pageNumber ? 'active' : ''}
//           >
//             {pageNumber}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PaginationExample;
