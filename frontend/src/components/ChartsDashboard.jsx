import BrandBarChart from "./charts/BrandBarChart";
import BrandSharePieChart from "./charts/BrandSharePieChart";
import MonthlyRevenueChart from "./charts/MonthlyRevenueChart";
import PlatformBarChart from "./charts/PlatformBarChart";
import TopProductsChart from "./charts/TopProductsChart";

function ChartsDashboard({ metrics }) {
    const platformRevenue = metrics?.platform?.revenue_by_platform;
    const brandRevenue = metrics?.brand?.revenue_by_brand;
    const brandShare = metrics?.brand?.revenue_share_by_brand;
    const monthlyRevenue = metrics?.time?.monthly_revenue;
    const topProductsRevenue = metrics?.products?.top_products_by_revenue;
    const topProductsData = topProductsRevenue
        ? Object.entries(topProductsRevenue).map(([product, revenue]) => ({
            product,
            revenue,
        }))
        : null;

    return (
        <div style={{ marginTop: "3rem" }}>
            <h3>Visual Insights</h3>
            <div className="charts-grid">
                <div className="chart-cell">
                    <PlatformBarChart data={platformRevenue} />
                </div>
                <div className="chart-cell">
                    <BrandBarChart data={brandRevenue} />
                </div>
                <div className="chart-cell">
                    <MonthlyRevenueChart data={monthlyRevenue} />
                </div>
                <div className="chart-cell">
                    <TopProductsChart data={topProductsData} />
                </div>
                <div className="chart-cell">
                    <BrandSharePieChart data={brandShare} />
                </div>
            </div>
        </div>
    );
}

export default ChartsDashboard;