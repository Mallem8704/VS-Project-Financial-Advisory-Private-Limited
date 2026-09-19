import React from "react";
import { MetricCard, MetricCardProps } from "./metric-card";

export type StatCardProps = MetricCardProps;

export function StatCard(props: StatCardProps) {
  return <MetricCard {...props} />;
}
