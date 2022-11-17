import React, {
  useCallback,
  useEffect,
  useState,
  FC,
  CSSProperties,
} from 'react';
import classnames from 'classnames';
import './style.scss';

type textKey = 'nextPage' | 'prevPage' | 'total' | 'page' | 'item';
export interface PaginationProps {
  pageSize?: number;
  onPageSizeChange?: (pageSize: number) => void;
  onPageChange?: (page: number, pageSize: number) => void;
  total: number;
  style?: CSSProperties;
  pageSizeOptions?: number[];
  text?: {
    nextPage: string;
    prevPage: string;
    total: string;
    page: string;
    item: string;
  };
  className?: string;
}

const Pagination: FC<PaginationProps> = ({
  pageSize: propPageSize = 10,
  onPageSizeChange,
  onPageChange,
  total,
  style: propStyle = {},
  pageSizeOptions = [10, 20, 50, 100, 200],
  className: propClassName,
  text,
}) => {
  const [pageNums, setPageNums] = useState<number[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);
  useEffect(() => {
    setPageSize(propPageSize);
  }, [propPageSize]);
  useEffect(() => {
    const pages = Math.ceil(total / pageSize);
    const tmp: number[] = [];
    for (let i = 1; i <= pages; i++) {
      tmp.push(i);
    }
    setPageNums(tmp);
    setLastPage(pages);
  }, [total, pageSize]);

  const _onPageNumClick = useCallback(
    (num: number) => {
      if (Number(num) === Number(current)) return;
      if (num > lastPage) {
        num = lastPage;
      } else if (num < 1) {
        num = 1;
      }
      setCurrent(num);
      typeof onPageChange === 'function' && onPageChange(num, pageSize);
    },
    [setCurrent, lastPage, onPageChange, current, pageSize]
  );

  const _onPageSizeChange: React.ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (e) => {
        const { value } = e.currentTarget;
        setCurrent(1);
        setPageSize(Number(value));
        typeof onPageSizeChange === 'function' &&
          onPageSizeChange(Number(value));
      },
      [onPageSizeChange]
    );

  const getDisplayText = useCallback(
    (key: textKey) => {
      return text![key];
    },
    [text]
  );

  return (
    <section
      className={`mzl-pagination-wrapper ${propClassName || ''}}`}
      style={{ ...propStyle }}
      data-testid="test-pagination"
    >
      <span className={'total-and-page'}>
        {getDisplayText('total')}{' '}
        <span className="primary total-text ">{total}</span>{' '}
        {getDisplayText('item')}{' '}
        <span className="primary current-text">{current}</span>/
        <span className="last-page">{lastPage}</span>
        {getDisplayText('page')}
      </span>
      <ul className={'mzl-pagination'}>
        <li
          title={getDisplayText('prevPage')}
          className={classnames(
            'mzl-pagination-item',
            'mzl-pagination-item-prev',
            current === 1 ? 'mzl-pagination-disabled' : ''
          )}
          onClick={() =>
            _onPageNumClick(current - 1 > 0 ? current - 1 : current)
          }
        >
          <i className="m-icon-arrow-left-bold" style={{ fontSize: 16 }} />
        </li>
        {pageNums.length > 0 &&
          pageNums.map((num) => {
            return (
              <li
                key={num}
                title="1"
                className={classnames(
                  'mzl-pagination-item',
                  current === num ? 'mzl-pagination-item-active' : ''
                )}
                tabIndex={num}
                onClick={() => _onPageNumClick(num)}
              >
                <span>{num}</span>
              </li>
            );
          })}
        <li
          title={getDisplayText('nextPage')}
          tabIndex={0}
          className={classnames(
            'mzl-pagination-item',
            'mzl-pagination-item-next',
            current === lastPage ? 'mzl-pagination-disabled' : ''
          )}
          onClick={() =>
            _onPageNumClick(current + 1 < lastPage ? current + 1 : lastPage)
          }
        >
          <i className="m-icon-arrow-right-bold" style={{ fontSize: 16 }} />
        </li>
      </ul>
      <select className={'page-change-select'} onChange={_onPageSizeChange}>
        {pageSizeOptions.map((item) => {
          return (
            <option key={item} value={item}>{`${item} ${getDisplayText(
              'item'
            )}/${getDisplayText('page')}`}</option>
          );
        })}
      </select>
    </section>
  );
};
Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  pageSize: 10,
  pageSizeOptions: [10, 20, 50, 100, 200],
  onPageChange: () => { },
  onPageSizeChange: () => { },
  style: {},
  className: '',
  text: {
    nextPage: '下一页',
    prevPage: '上一页',
    total: '共',
    page: '页',
    item: '条',
  },
};
export default Pagination;
