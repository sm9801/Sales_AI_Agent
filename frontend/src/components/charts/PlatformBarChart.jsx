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

function PlatformBarChart({ data }) {
    if (!data) return null;

    const chartData = Object.entries(data).map(([platform, revenue]) => ({
        platform,
        revenue,
    }));

    const renderAlternatingLabel = ({ x, y, width, value, index }) => {
        if (value === null || value === undefined) return null;

        const offset = index % 2 === 0 ? 0 : 12;
        const xPos = x + width / 2;
        const yPos = y - 6 - offset;

        return (
            <text
                x={xPos}
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
            <h3>Revenue by Platform</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="platform" />
                    <YAxis tickFormatter={formatCompactNumber} />
                    <Tooltip formatter={(value) => formatKRW(value)} />
                    <Bar dataKey="revenue" fill="#16a34a">
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

export default PlatformBarChart;