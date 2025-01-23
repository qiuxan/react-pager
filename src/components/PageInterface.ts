export interface PagerProps {
    current?: number;
    total?: number;
    limit?: number;
    panelNumber?: number;
    onPageChange?: (pageNumber: number) => void;
}