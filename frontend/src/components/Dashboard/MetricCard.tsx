import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CircularProgressBar = ({
  percentage,
  color,
  bg,
}: {
  percentage: number;
  color: string;
  bg: string;
}) => (
  <div className="relative w-24 h-12">
    <svg className="w-full h-full" viewBox="0 0 100 50">
      <circle
        className={`stroke-current ${bg}`} // Correctly apply bg class
        strokeWidth="6" // Adjust strokeWidth for a thinner appearance
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDasharray="125.6637 125.6637" // Half of the full circle circumference
        transform="rotate(180 50 50)" // Flip the circle to start from the left
      ></circle>
      <circle
        className={`stroke-current ${color}`}
        strokeWidth="6" // Adjust strokeWidth for a thinner appearance
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDasharray={`${(percentage / 100) * 125.6637} 125.6637`}
        transform="rotate(180 50 50)" // Flip the progress arc as well
      ></circle>
    </svg>
    <span className="absolute inset-0 flex mt-5 items-center justify-center text-sm font-medium">
      {percentage}%
    </span>
  </div>
);

const MetricCard = ({
  title,
  value,
  percentage,
  color,
  bg,
}: {
  title: string;
  value: number;
  percentage: number;
  color: string;
  bg: string;
}) => (
  <div>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xs font-[400] text-[#808080]">
        {title}
      </CardTitle>
      <CircularProgressBar percentage={percentage} color={color} bg={bg} />{" "}
    </CardHeader>
    <CardContent className="flex items-center space-x-2">
      <div className="text-2xl font-bold">{value.toLocaleString()}</div>
      <p className="text-xs text-muted-foreground">kWh</p>
    </CardContent>
  </div>
);

export default MetricCard;
