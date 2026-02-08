import {
    LabelList,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { formatCompactNumber, formatKRW } from "../../utils/formatters";

function MonthlyRevenueChart({ data }) {
    if (!data) return null;

    const chartData = Object.entries(data).map(([month, revenue]) => ({
        month,
        revenue,
    }));

    const renderAlternatingLabel = ({ x, y, value, index }) => {
        if (value === null || value === undefined) return null;

        const offset = index % 2 === 0 ? 0 : 12;
        const yPos = y - 8 - offset;

        return (
            <text
                x={x}
                y={yPos}
                textAnchor="middle"
                fill="#374151"
                fontSize={12}
            >
                {formatCompactNumber(value)}
            </text>
        );
    };

    return (
        <>
            <h3>Monthly Revenue</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={formatCompactNumber} />
                    <Tooltip formatter={(value) => formatKRW(value)} />
                    <Line type="monotone" dataKey="revenue" stroke="#2563eb">
                        <LabelList
                            dataKey="revenue"
                            content={renderAlternatingLabel}
                        />
                    </Line>
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default MonthlyRevenueChart;