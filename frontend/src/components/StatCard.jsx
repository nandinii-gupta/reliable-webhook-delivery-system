const StatCard = ({ title, value, color }) => {

return (

<div className="stat-card">

<div
className="stat-icon"
style={{ background: color }}
>
</div>

<div>

<div className="stat-title">
{title}
</div>

<div className="stat-value">
{value}
</div>

</div>

</div>

);

};

export default StatCard;