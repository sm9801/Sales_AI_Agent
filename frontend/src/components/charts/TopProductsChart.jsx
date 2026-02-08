import {
    Bar,
    BarChart,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { formatCompactNumber, formatKRW } from "../../utils/formatters";

function TopProductsChart({ data }) {
    if (!data) return null;

    const renderAlternatingLabel = ({ x, y, width, height, value, index }) => {
        if (value === null || value === undefined) return null;

        const offset = index % 2 === 0 ? -8 : 8;
        const xPos = x + width + 6;
        const yPos = y + height / 2 + offset;

        return (
            <text
                x={xPos}
                y={yPos}
                textAnchor="start"
                alignmentBaseline="middle"
                fill="#374151"
                fontSize={12}
            >
                {formatCompactNumber(value)}
            </text>
        );
    };

    return (
        <>
            <h3>Top Products</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" tickFormatter={formatCompactNumber} />
                    <YAxis dataKey="product" type="category" width={150} />
                    <Tooltip formatter={(value) => formatKRW(value)} />
                    <Bar dataKey="revenue" fill="#f97316">
                        <LabelList
                            dataKey="revenue"
                            content={renderAlternatingLabel}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default TopProductsChart;