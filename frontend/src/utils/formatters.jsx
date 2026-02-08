export const formatKRW = (value) => {
    if (value === null || value === undefined) return "-";

    return new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
    }).format(value);
};

export const formatCompactNumber = (value) => {
    if (value === null || value === undefined || Number.isNaN(value)) return "-";

    return new Intl.NumberFormat("ko-KR", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value);
};