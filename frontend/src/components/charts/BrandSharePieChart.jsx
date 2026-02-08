import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f97316", "#ef4444", "#14b8a6", "#eab308"];

function BrandSharePieChart({ data }) {
    if (!data) return null;

    const chartData = Object.entries(data).map(([brand, share]) => ({
        brand,
        share,
    }));

    return (
        <>
            <h3>Brand Share</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="share"
                        nameKey="brand"
                        outerRadius={110}
                        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                    >
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${entry.brand}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default BrandSharePieChart;
